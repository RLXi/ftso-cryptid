type PlayerName = "alpha" | "beta" | "gamma" | "delta" | "epsilon";
type PlayerColor = "red" | "green" | "brown" | "blue" | "purple";

export interface IPlayer {
  name: PlayerName;
  color?: PlayerColor;
}

export function Player(name: PlayerName): IPlayer {
  let color: PlayerColor = "red";
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
    default:
      throw new Error("Invalid player");
  }
  return {
    name,
    color,
  };
}
