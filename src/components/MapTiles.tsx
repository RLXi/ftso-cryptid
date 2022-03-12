import { useViewportSize } from "@mantine/hooks";
import _ from "lodash";
import { useMemo } from "react";
import { Group } from "react-konva";
import { GRID_HEX_SIZE, MyGrid } from "../utils";

import { AnimalHexagon, MyHexagon } from "./Hexagon";

export function MapTiles({
  tileset,
  offsetX = 0,
  offsetY = 0,
}: {
  tileset: any[];
  offsetX?: number;
  offsetY?: number;
}) {
  const miniGrid = MyGrid(GRID_HEX_SIZE, 6, 3);
  const memoHexes = useMemo(() => {
    let inc = 0;
    return miniGrid.map((hex, idx) => {
      const { animal, color } = tileset[idx % 3][inc];
      if (idx % 3 === 2) inc++;

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
          />
        );
      return (
        <MyHexagon
          id={idx}
          x={point.x}
          y={point.y}
          coordx={hex.x}
          coordy={hex.y}
          key={`${point.x}-${point.y}`}
          color={color}
        />
      );
    });
  }, [tileset]);
  return (
    // <Layer offsetX={offsetX} offsetY={offsetY} draggable>
    //   {memoHexes.map((hex) => hex)}
    // </Layer>
    <Group offsetX={offsetX} offsetY={offsetY} draggable>
      {memoHexes.map((hex) => hex)}
    </Group>
  );
}
