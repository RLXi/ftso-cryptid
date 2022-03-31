import { useViewportSize } from "@mantine/hooks";
import { Stage, Layer } from "react-konva";
import { MapTiles } from "./MapTiles";

import {
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
import { useState, useContext, useEffect } from "react";
import {
  Center,
  Group,
  Radio,
  RadioGroup,
  SimpleGrid,
  Slider,
  Switch,
} from "@mantine/core";
import SetupContext, { TileNumber } from "../SetupContext";

import styles from "../styles/Step2.module.css";

function HelperItem({ tile, count }: { tile: string; count: number }) {
  return (
    <div className={`${styles.helper_item} ${count === 0 ? styles.black : ""}`}>
      <span>{tile}</span>
    </div>
  );
}

function VisualHelper({ tiles }: { tiles: string[] }) {
  const helperItems = [];
  const len = tiles.length;
  let count = 0;

  for (let y = 0; y < len / 2; y++) {
    for (let x = 0; x < len / 3; x++) {
      helperItems.push(
        <HelperItem
          key={`${tiles[count]}-${count}`}
          tile={tiles[count]}
          count={(y + x) % 2}
        />
      );
      count++;
    }
  }

  return (
    <div className={styles.visual_helper}>
      {helperItems.map((item) => item)}
    </div>
  );
}

export function Step2() {
  const tiles: any = {
    tile1,
    tile2,
    tile3,
    tile4,
    tile5,
    tile6,
    tile1f,
    tile2f,
    tile3f,
    tile4f,
    tile5f,
    tile6f,
  };
  const setup = useContext(SetupContext);

  const a = useViewportSize();
  const offsetX = -450;
  const offsetY = -260;
  const setupTiles = setup.mapLayout;

  const [gridScale, setGridScale] = useState(1);
  const [gridScaleEnd, setGridScaleEnd] = useState(1);

  const [pos1, setPos1] = useState(setupTiles.position1.tile);
  const [pos2, setPos2] = useState(setupTiles.position2.tile);
  const [pos3, setPos3] = useState(setupTiles.position3.tile);
  const [pos4, setPos4] = useState(setupTiles.position4.tile);
  const [pos5, setPos5] = useState(setupTiles.position5.tile);
  const [pos6, setPos6] = useState(setupTiles.position6.tile);

  const [flip1, setFlip1] = useState(setupTiles.position1.flipped);
  const [flip2, setFlip2] = useState(setupTiles.position1.flipped);
  const [flip3, setFlip3] = useState(setupTiles.position1.flipped);
  const [flip4, setFlip4] = useState(setupTiles.position1.flipped);
  const [flip5, setFlip5] = useState(setupTiles.position1.flipped);
  const [flip6, setFlip6] = useState(setupTiles.position1.flipped);

  useEffect(() => {
    setup.setMapLayout({
      position1: {
        tile: pos1,
        flipped: flip1,
      },
      position2: {
        tile: pos2,
        flipped: flip2,
      },
      position3: {
        tile: pos3,
        flipped: flip3,
      },
      position4: {
        tile: pos4,
        flipped: flip4,
      },
      position5: {
        tile: pos5,
        flipped: flip5,
      },
      position6: {
        tile: pos6,
        flipped: flip6,
      },
    });
  }, [
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    flip1,
    flip2,
    flip3,
    flip4,
    flip5,
    flip6,
  ]);

  const tilesVisual = [
    `tile${pos1}${flip1 ? "f" : ""}`,
    `tile${pos2}${flip2 ? "f" : ""}`,
    `tile${pos3}${flip3 ? "f" : ""}`,
    `tile${pos4}${flip4 ? "f" : ""}`,
    `tile${pos5}${flip5 ? "f" : ""}`,
    `tile${pos6}${flip6 ? "f" : ""}`,
  ];

  return (
    <>
      <Center style={{ padding: "1em" }}>
        <SimpleGrid
          cols={6}
          breakpoints={[
            { cols: 1, maxWidth: 450 },
            { cols: 2, maxWidth: 650 },
            { cols: 3, maxWidth: 1200 },
          ]}
        >
          <MapTileChoice
            radioLabel="First"
            radioName="first"
            switchName="first"
            pos={pos1}
            setPos={setPos1}
            flip={flip1}
            setFlip={setFlip1}
          />
          <MapTileChoice
            radioLabel="Second"
            radioName="second"
            switchName="second"
            pos={pos2}
            setPos={setPos2}
            flip={flip2}
            setFlip={setFlip2}
          />
          <MapTileChoice
            radioLabel="Third"
            radioName="third"
            switchName="third"
            pos={pos3}
            setPos={setPos3}
            flip={flip3}
            setFlip={setFlip3}
          />
          <MapTileChoice
            radioLabel="Fourth"
            radioName="fourth"
            switchName="fourth"
            pos={pos4}
            setPos={setPos4}
            flip={flip4}
            setFlip={setFlip4}
          />
          <MapTileChoice
            radioLabel="Fifth"
            radioName="fifth"
            switchName="fifth"
            pos={pos5}
            setPos={setPos5}
            flip={flip5}
            setFlip={setFlip5}
          />
          <MapTileChoice
            radioLabel="Sixth"
            radioName="sixth"
            switchName="sixth"
            pos={pos6}
            setPos={setPos6}
            flip={flip6}
            setFlip={setFlip6}
          />
        </SimpleGrid>
      </Center>
      <Center>
        <VisualHelper tiles={tilesVisual} />
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
        width={a.width - a.width * 0.1}
        height={a.height}
        offsetX={-50}
        offsetY={-50}
        style={{
          backgroundColor: "var(--gray-9)",
        }}
        scale={{ x: gridScaleEnd, y: gridScaleEnd }}
        draggable
      >
        <Layer>
          <MapTiles tileset={tiles[`tile${pos1 + (flip1 ? "f" : "")}`]} />
          <MapTiles
            tileset={tiles[`tile${pos2 + (flip2 ? "f" : "")}`]}
            offsetX={offsetX}
          />
          <MapTiles
            tileset={tiles[`tile${pos3 + (flip3 ? "f" : "")}`]}
            offsetY={offsetY}
          />
          <MapTiles
            tileset={tiles[`tile${pos4 + (flip4 ? "f" : "")}`]}
            offsetX={offsetX}
            offsetY={offsetY}
          />
          <MapTiles
            tileset={tiles[`tile${pos5 + (flip5 ? "f" : "")}`]}
            offsetY={offsetY - 260}
          />
          <MapTiles
            tileset={tiles[`tile${pos6 + (flip6 ? "f" : "")}`]}
            offsetX={offsetX}
            offsetY={offsetY - 260}
          />
        </Layer>
      </Stage>
    </>
  );
}

interface IMapTileChoice {
  radioName: string;
  radioLabel: string;
  switchName: string;
  pos: number;
  flip: boolean;
  setPos: (s: TileNumber) => void;
  setFlip: (b: boolean) => void;
}

function MapTileChoice({
  radioName: name,
  radioLabel: label,
  switchName,
  pos,
  setPos,
  flip,
  setFlip,
}: IMapTileChoice) {
  return (
    <Group style={{ width: "17em" }}>
      <RadioGroup
        label={label}
        required
        name={name}
        value={pos.toString()}
        onChange={(e) => setPos(parseInt(e) as TileNumber)}
      >
        <Radio value="1" label="Tile 1" />
        <Radio value="2" label="Tile 2" />
        <Radio value="3" label="Tile 3" />
        <Radio value="4" label="Tile 4" />
        <Radio value="5" label="Tile 5" />
        <Radio value="6" label="Tile 6" />
      </RadioGroup>
      <Switch
        label="Flipped"
        name={`${switchName}flipped`}
        checked={flip}
        onChange={(e) => setFlip(e.currentTarget.checked)}
      />
    </Group>
  );
}
