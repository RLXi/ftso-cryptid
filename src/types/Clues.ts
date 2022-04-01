import { IStructureType, IStructureColor } from "./Structure";

export type TerrainTypes = "Forest" | "Mountain" | "Swamp" | "Desert" | "Water";

export type InTerrain = `In${TerrainTypes}${TerrainTypes}`;

export type WithinOne =
  | `WithinOneFrom${TerrainTypes}`
  | "WithinOneFromAnimalTerritories";

export type WithinTwo =
  | `WithinTwoFrom${TerrainTypes}`
  | `WithinTwoFrom${IStructureType}`;

export type WithinThree = `WithinThreeFrom${IStructureColor}`;
