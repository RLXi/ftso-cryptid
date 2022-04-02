import _ from "lodash";
import { Center, Slider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { AnimalHexagon, BasicHexagon } from "../components";
import React, { useState, useContext, useMemo } from "react";
import { Layer, Stage } from "react-konva";
import SetupContext from "../SetupContext";

import {
  GRID_HEX_SIZE,
  IAnimalTerrain,
  MyGrid,
  tile1,
  tile1f,
  tile2,
  tile2f,
  tile3,
  tile3f,
  tile4,
  tile4f,
  tile5,
  tile5f,
  tile6,
  tile6f,
} from "../utils";

interface ITerrain {
  type: string;
  color: string;
  animal?: string;
}

function RenderMap({
  children,
  width,
  height,
  gridScale,
  gridScaleEnd,
  setGridScale,
  setGridScaleEnd,
}: {
  children: React.ReactNode;
  width: number;
  height: number;
  gridScale: number;
  gridScaleEnd: number;
  setGridScale: (n: number) => void;
  setGridScaleEnd: (n: number) => void;
}) {
  return (
    <>
      <Center>
        <div>
          Grid scale: {gridScale.toFixed(2)}
          <br />
          <Slider
            value={gridScale}
            onChange={setGridScale}
            onChangeEnd={setGridScaleEnd}
            min={0.1}
            max={2}
            step={0.01}
          />
        </div>
      </Center>
      <Stage
        width={width}
        height={height}
        offsetX={-50}
        offsetY={-50}
        style={{
          backgroundColor: "var(--gray-9)",
        }}
        scale={{
          x: gridScaleEnd,
          y: gridScaleEnd,
        }}
        draggable
      >
        {children}
      </Stage>
    </>
  );
}

export function useMap(gridWidth = 12, gridHeight = 9) {
  const grid = MyGrid(GRID_HEX_SIZE, gridWidth, gridHeight);
  const [gridScale, setGridScale] = useState(1);
  const [gridScaleEnd, setGridScaleEnd] = useState(1);
  const a = useViewportSize();
  const setup = useContext(SetupContext);
  const map = setup.mapLayout;
  const tileset = {
    tile1,
    tile1f,
    tile2,
    tile2f,
    tile3,
    tile3f,
    tile4,
    tile4f,
    tile5,
    tile5f,
    tile6,
    tile6f,
  };

  const tiles = useMemo(() => {
    const processingOrder = [
      map.position1,
      map.position3,
      map.position5,
      map.position2,
      map.position4,
      map.position6,
    ];

    let col = 0;
    let cursor = 0;
    let halfpoint = false;

    const hexesInOrder = processingOrder
      .map((val) => tileset[`tile${val.tile}${val.flipped ? "f" : ""}`])
      .reduce((acc: any[], val) => {
        const flat = _.flatten(val);
        return [...acc, ...flat];
      }, []);
    const typed = [...hexesInOrder] as IAnimalTerrain[];

    const hexes = grid.map((hex, idx) => {
      const { animal, type, color } = typed[(idx % 9) + cursor + col];
      cursor += 5;

      if (idx % 9 === 8) {
        col += 1;
        if (col === 6) {
          halfpoint = true;
          col = 0;
        }
        cursor = halfpoint ? (gridWidth * gridHeight) / 2 : 0;
      }

      const point = hex.toPoint();
      if (animal)
        return (
          <AnimalHexagon
            id={idx}
            key={point.x + "-" + point.y}
            animal={animal}
            x={point.x}
            y={point.y}
            coordx={hex.x}
            coordy={hex.y}
            color={color}
            type={type}
          />
        );
      return (
        <BasicHexagon
          id={idx}
          x={point.x}
          y={point.y}
          coordx={hex.x}
          coordy={hex.y}
          key={`${point.x}-${point.y}`}
          color={color}
          type={type}
        />
      );
    });
    return hexes;
  }, [map]);

  const Map = useMemo(() => {
    return () => (
      <RenderMap
        width={a.width - 150}
        height={a.height - 150}
        gridScale={gridScale}
        gridScaleEnd={gridScaleEnd}
        setGridScale={setGridScale}
        setGridScaleEnd={setGridScaleEnd}
      >
        <Layer>
          {tiles.map((hex) => (
            <React.Fragment key={hex.key}>{hex}</React.Fragment>
          ))}
        </Layer>
      </RenderMap>
    );
  }, [gridScale, gridScaleEnd, a.height, a.width]);
  return { Map };
}
