type ITerrainColor = "green" | "blue" | "yellow" | "purple" | "gray";
type ITerrainType = "forest" | "water" | "desert" | "swamp" | "mountain";
type ITerrainAnimal = "bear" | "cougar" | null;

export interface ITerrain {
  type: ITerrainType;
  color: ITerrainColor;
}

export interface IAnimalTerrain extends ITerrain {
  animal: ITerrainAnimal;
}

export function Terrain(type: ITerrainType): ITerrain {
  let color: ITerrainColor;
  switch (type) {
    case "forest":
      color = "green";
      break;
    case "water":
      color = "blue";
      break;
    case "desert":
      color = "yellow";
      break;
    case "swamp":
      color = "purple";
      break;
    case "mountain":
      color = "gray";
      break;
    default:
      throw new Error("Invalid terrain");
  }

  return {
    type,
    color,
  };
}

export function AnimalTerrain(
  type: ITerrainType,
  color: ITerrainColor,
  animal: ITerrainAnimal
): IAnimalTerrain {
  return {
    type,
    color,
    animal,
  };
}
