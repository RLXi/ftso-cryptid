import { useMemo } from "react";
import { MyHexagon, AnimalHexagon } from "components";
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
  terrainColorList,
} from "utils";

export function useMap() {
  const map = MyGrid(GRID_HEX_SIZE);
  const memoHexes = useMemo(() => {
    return map.map((hex) => {
      const point = hex.toPoint();
    });
  }, []);
  return memoHexes;
  // return Math.floor(Math.random() * 2) < 1 ? (
  //   <MyHexagon
  //     x={point.x}
  //     y={point.y}
  //     key={`${point.x}${point.y}`}
  //     color={
  //       terrainColorList[
  //         Math.floor(Math.random() * terrainColorList.length)
  //       ]
  //     }
  //   />
  // ) : (
  //   <AnimalHexagon
  //     x={point.x}
  //     y={point.y}
  //     animal={Math.floor(Math.random() * 2) < 1 ? "bear" : "cougar"}
  //     key={`${point.x}${point.y}`}
  //     color={
  //       terrainColorList[
  //         Math.floor(Math.random() * terrainColorList.length)
  //       ]
  //     }
  //   />
  // );
  // });
  //   }, []);
}
