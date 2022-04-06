type TerrainTypes = "Forest" | "Mountain" | "Swamp" | "Desert" | "Water";
type AnimalTypes = "Bear" | "Cougar";
type StructureTypes = "Shack" | "Stone";
type StructureColors = "Blue" | "Green" | "White" | "Black";

export type InTerrain = `In${TerrainTypes}${TerrainTypes}`;
export type NotInTerrain = `NotIn${TerrainTypes}${TerrainTypes}`;

export type WithinOne =
  | `WithinOneFrom${TerrainTypes}`
  | "WithinOneFromAnimalTerritories";
export type NotWithinOne =
  | `NotWithinOneFrom${TerrainTypes}`
  | "NotWithinOneFromAnimalTerritories";

export type WithinTwo =
  | `WithinTwoFrom${TerrainTypes}`
  | `WithinTwoFrom${AnimalTypes}`
  | `WithinTwoFrom${StructureTypes}`;
export type NotWithinTwo =
  | `NotWithinTwoFrom${TerrainTypes}`
  | `NotWithinTwoFrom${AnimalTypes}`
  | `NotWithinTwoFrom${StructureTypes}`;

export type WithinThree = `WithinThreeFrom${StructureColors}`;
export type NotWithinThree = `NotWithinThreeFrom${StructureColors}`;
