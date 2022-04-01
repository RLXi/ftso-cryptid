export type IStructureType = "shack" | "stone";
export type IStructureColor = "blue" | "green" | "white" | "black";
export interface IStructurePosition {
  x: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  y: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type: IStructureType;
  color: IStructureColor;
}

export type str = `${IStructureColor}-${IStructureType}`;

export interface IStructurePositions {
  "green-shack": IStructurePosition;
  "green-stone": IStructurePosition;
  "blue-shack": IStructurePosition;
  "blue-stone": IStructurePosition;
  "white-shack": IStructurePosition;
  "white-stone": IStructurePosition;
  "black-shack": IStructurePosition;
  "black-stone": IStructurePosition;
}
