export interface ITerrain {
  name: "forest" | "water" | "desert" | "swamp" | "mountain";
  color: "yellow" | "green" | "gray" | "blue" | "purple";
  animal: "bear" | "cougar" | null;
}

const terrainColorList = ["yellow", "green", "gray", "blue", "purple"];

export default function Terrain(
  name: "forest" | "water" | "desert" | "swamp" | "mountain"
): ITerrain {
  return {
    name: "forest",
    color: "green",
    animal: null,
  };
}
