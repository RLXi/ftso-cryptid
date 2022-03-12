import React from "react";

export type GameModeType = "normal" | "advanced";
export type NumPlayersType = 2 | 3 | 4 | 5;
export interface IStructurePosition {
  x: number;
  y: number;
  type: "shack" | "stone";
}
export interface ISetup {
  mapLayout: string;
  structurePositions: IStructurePosition[];
  gameMode: GameModeType;
  numPlayers: NumPlayersType;
  setGameMode: (s: GameModeType) => void;
  setNumPlayers: (n: NumPlayersType) => void;
  setStructurePositions: (s: IStructurePosition[]) => void;
  setMapLayout: (n: string) => void;
}

const SetupContext = React.createContext<ISetup>({} as ISetup);

export function SetupProvider({ children }: { children: React.ReactNode }) {
  const [gameMode, setGameMode] = React.useState<GameModeType>("normal");
  const [structurePositions, setStructurePositions] = React.useState<any[]>([]);
  const [numPlayers, setNumPlayers] = React.useState<NumPlayersType>(4);
  const [mapLayout, setMapLayout] = React.useState(
    "tile1,tile2,tile3,tile4,tile5,tile6"
  );

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
