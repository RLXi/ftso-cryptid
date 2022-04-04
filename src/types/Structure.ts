export type IStructureType = "shack" | "stone";
export type IStructureColor = "blue" | "green" | "white" | "black";
export interface IStructurePosition {
  x: number;
  y: number;
  type: IStructureType;
  color: IStructureColor;
}

export type str = `${IStructureColor}-${IStructureType}`;

export interface IStructurePositions {
  greenshack: IStructurePosition;
  greenstone: IStructurePosition;
  blueshack: IStructurePosition;
  bluestone: IStructurePosition;
  whiteshack: IStructurePosition;
  whitestone: IStructurePosition;
  blackshack: IStructurePosition;
  blackstone: IStructurePosition;
}
