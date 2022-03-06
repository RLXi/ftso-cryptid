export interface IPlayer {
  name: "alpha" | "beta" | "gamma" | "delta" | "epsilon";
  color?: string;
}

export default function Player(
  name: "alpha" | "beta" | "gamma" | "delta" | "epsilon"
): IPlayer {
  let color = "red";
  switch (name) {
    case "alpha":
      color = "red";
      break;
    case "beta":
      color = "green";
      break;
    case "gamma":
      color = "brown";
      break;
    case "delta":
      color = "blue";
      break;
    case "epsilon":
      color = "purple";
      break;
  }
  return {
    name,
    color,
  };
}
