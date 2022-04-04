import { createContext, useState, useReducer, ReactNode } from "react";
import { useSetState } from "@mantine/hooks";

import { IStructurePositions, IStructurePosition } from "./types";

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
  isSetup: boolean;
  mapLayout: IMapLayout;
  structurePositions: IStructurePositions;
  gameMode: GameModeType;
  numPlayers: NumPlayersType;
  setIsSetup: (isSetup: boolean) => void;
  setGameMode: (mode: GameModeType) => void;
  setNumPlayers: (numPlayers: NumPlayersType) => void;
  setStructurePositions: (action: IReducerActionTypes) => void;
  setMapLayout: (MapCode: IMapLayout) => void;
}

const SetupContext = createContext<ISetup>({} as ISetup);

interface IReducerActionTypes {
  type:
    | "greenshack"
    | "greenstone"
    | "blueshack"
    | "bluestone"
    | "whiteshack"
    | "whitestone"
    | "blackshack"
    | "blackstone";
  newPosition: Pick<IStructurePosition, "x" | "y">;
}

function structureReducer(
  state: IStructurePositions,
  action: IReducerActionTypes
) {
  const { newPosition, type } = action;
  const { x, y } = newPosition;
  switch (type) {
    case "greenshack":
      return {
        ...state,
        greenshack: {
          ...state.greenshack,
          x,
          y,
        },
      };
    case "greenstone":
      return {
        ...state,
        greenstone: {
          ...state.greenstone,
          x,
          y,
        },
      };
    case "blueshack":
      return {
        ...state,
        blueshack: {
          ...state.blueshack,
          x,
          y,
        },
      };
    case "bluestone":
      return {
        ...state,
        bluestone: {
          ...state.bluestone,
          x,
          y,
        },
      };
    case "whiteshack":
      return {
        ...state,
        whiteshack: {
          ...state.whiteshack,
          x,
          y,
        },
      };
    case "whitestone":
      return {
        ...state,
        whitestone: {
          ...state.whitestone,
          x,
          y,
        },
      };
    case "blackshack":
      return {
        ...state,
        blackshack: {
          ...state.blackshack,
          x,
          y,
        },
      };
    case "blackstone":
      return {
        ...state,
        blackstone: {
          ...state.blackstone,
          x,
          y,
        },
      };
    default:
      return state;
  }
}

const initialState: IStructurePositions = {
  greenshack: { x: -1, y: -1, type: "shack", color: "green" },
  greenstone: { x: -1, y: -1, type: "stone", color: "green" },
  blueshack: { x: -1, y: -1, type: "shack", color: "blue" },
  bluestone: { x: -1, y: -1, type: "stone", color: "blue" },
  whiteshack: { x: -1, y: -1, type: "shack", color: "white" },
  whitestone: { x: -1, y: -1, type: "stone", color: "white" },
  blackshack: { x: -1, y: -1, type: "shack", color: "black" },
  blackstone: { x: -1, y: -1, type: "stone", color: "black" },
};

export function SetupProvider({ children }: { children: ReactNode }) {
  const [gameMode, setGameMode] = useState<GameModeType>("normal");
  const [structurePositions, dispatch] = useReducer(
    structureReducer,
    initialState
  );
  const [numPlayers, setNumPlayers] = useState<NumPlayersType>(4);
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
  const [isSetup, setIsSetup] = useState(true);

  return (
    <SetupContext.Provider
      value={{
        isSetup,
        mapLayout,
        structurePositions,
        gameMode,
        numPlayers,
        setIsSetup,
        setGameMode,
        setStructurePositions: dispatch,
        setNumPlayers,
        setMapLayout,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
}

export default SetupContext;
