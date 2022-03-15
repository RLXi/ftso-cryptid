import _ from "lodash";
import { useMemo } from "react";
import { MyHexagon, AnimalHexagon } from "../components";
import {
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
  GRID_HEX_SIZE,
} from "../utils";

const defaultTileLayout = [tile1, tile2, tile3, tile4, tile5, tile6];
const hexesInRow = _.flatten([
  tile1[0][0],
  tile1[1][0],
  tile1[2][0],
  tile3[0][0],
  tile3[1][0],
  tile3[2][0],
  tile5[0][0],
  tile5[1][0],
  tile5[2][0],
  tile1[0][1],
  tile1[1][1],
  tile1[2][1],
  tile3[0][1],
  tile3[1][1],
  tile3[2][1],
  tile5[0][1],
  tile5[1][1],
  tile5[2][1],
  tile1[0][2],
  tile1[1][2],
  tile1[2][2],
  tile3[0][2],
  tile3[1][2],
  tile3[2][2],
  tile5[0][2],
  tile5[1][2],
  tile5[2][2],
  tile1[0][3],
  tile1[1][3],
  tile1[2][3],
  tile3[0][3],
  tile3[1][3],
  tile3[2][3],
  tile5[0][3],
  tile5[1][3],
  tile5[2][3],
  tile1[0][4],
  tile1[1][4],
  tile1[2][4],
  tile3[0][4],
  tile3[1][4],
  tile3[2][4],
  tile5[0][4],
  tile5[1][4],
  tile5[2][4],
  tile1[0][5],
  tile1[1][5],
  tile1[2][5],
  tile3[0][5],
  tile3[1][5],
  tile3[2][5],
  tile5[0][5],
  tile5[1][5],
  tile5[2][5],
  tile2[0][0],
  tile2[1][0],
  tile2[2][0],
  tile4[0][0],
  tile4[1][0],
  tile4[2][0],
  tile6[0][0],
  tile6[1][0],
  tile6[2][0],
  tile2[0][1],
  tile2[1][1],
  tile2[2][1],
  tile4[0][1],
  tile4[1][1],
  tile4[2][1],
  tile6[0][1],
  tile6[1][1],
  tile6[2][1],
  tile2[0][2],
  tile2[1][2],
  tile2[2][2],
  tile4[0][2],
  tile4[1][2],
  tile4[2][2],
  tile6[0][2],
  tile6[1][2],
  tile6[2][2],
  tile2[0][3],
  tile2[1][3],
  tile2[2][3],
  tile4[0][3],
  tile4[1][3],
  tile4[2][3],
  tile6[0][3],
  tile6[1][3],
  tile6[2][3],
  tile2[0][4],
  tile2[1][4],
  tile2[2][4],
  tile4[0][4],
  tile4[1][4],
  tile4[2][4],
  tile6[0][4],
  tile6[1][4],
  tile6[2][4],
  tile2[0][5],
  tile2[1][5],
  tile2[2][5],
  tile4[0][5],
  tile4[1][5],
  tile4[2][5],
  tile6[0][5],
  tile6[1][5],
  tile6[2][5],
]);

export function useMap() {
  const map = MyGrid(GRID_HEX_SIZE);

  const memoHexes = useMemo(() => {
    return map.map((hex, idx) => {
      const point = hex.toPoint();

      const { animal, color, type } = hexesInRow[idx];
      return animal ? (
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
      ) : (
        <MyHexagon
          id={idx}
          key={point.x + "-" + point.y}
          x={point.x}
          y={point.y}
          coordx={hex.x}
          coordy={hex.y}
          color={color}
          type={type}
        />
      );
    });
  }, [hexesInRow]);
  return memoHexes;
}
