import React from "react";
import { useSetState } from "@mantine/hooks";

import { IStructurePositions } from "./types";

export type GameModeType = "normal" | "advanced";
export type NumPlayersType = 2 | 3 | 4 | 5;

export type TileNumber = 1 | 2 | 3 | 4 | 5 | 6;

export interface IMapLayout {
  position1: {
    tile: TileNumber;
    flipped: boolean;
  };
  position2: {
    tile: TileNumber;
    flipped: boolean;
  };
  position3: {
    tile: TileNumber;
    flipped: boolean;
  };
  position4: {
    tile: TileNumber;
    flipped: boolean;
  };
  position5: {
    tile: TileNumber;
    flipped: boolean;
  };
  position6: {
    tile: TileNumber;
    flipped: boolean;
  };
}

export interface ISetup {
  mapLayout: IMapLayout;
  structurePositions: IStructurePositions;
  gameMode: GameModeType;
  numPlayers: NumPlayersType;
  setGameMode: (mode: GameModeType) => void;
  setNumPlayers: (numPlayers: NumPlayersType) => void;
  setStructurePositions: (structurePositions: IStructurePositions) => void;
  setMapLayout: (MapCode: IMapLayout) => void;
}

const SetupContext = React.createContext<ISetup>({} as ISetup);

export function SetupProvider({ children }: { children: React.ReactNode }) {
  const [gameMode, setGameMode] = React.useState<GameModeType>("normal");
  const [structurePositions, setStructurePositions] =
    useSetState<IStructurePositions>({
      "green-shack": { x: -1, y: -1, type: "shack", color: "green" },
      "green-stone": { x: -1, y: -1, type: "stone", color: "green" },
      "blue-shack": { x: -1, y: -1, type: "shack", color: "blue" },
      "blue-stone": { x: -1, y: -1, type: "stone", color: "blue" },
      "white-shack": { x: -1, y: -1, type: "shack", color: "white" },
      "white-stone": { x: -1, y: -1, type: "stone", color: "white" },
      "black-shack": { x: -1, y: -1, type: "shack", color: "black" },
      "black-stone": { x: -1, y: -1, type: "stone", color: "black" },
    });
  const [numPlayers, setNumPlayers] = React.useState<NumPlayersType>(4);
  const [mapLayout, setMapLayout] = useSetState<IMapLayout>({
    position1: {
      tile: 1,
      flipped: false,
    },
    position2: {
      tile: 2,
      flipped: false,
    },
    position3: {
      tile: 3,
      flipped: false,
    },
    position4: {
      tile: 4,
      flipped: false,
    },
    position5: {
      tile: 5,
      flipped: false,
    },
    position6: {
      tile: 6,
      flipped: false,
    },
  });

  return (
    <SetupContext.Provider
      value={{
        mapLayout,
        structurePositions,
        gameMode,
        numPlayers,
        setGameMode,
        setStructurePositions,
        setNumPlayers,
        setMapLayout,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
}

export default SetupContext;
