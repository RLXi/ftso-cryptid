import React from "react";
import { RegularPolygon } from "react-konva";

interface IStructure {
  type: "shack" | "stone";
  color: "blue" | "green" | "white" | "black";
}

export default function Structure({ type, color }: IStructure) {
  const numSides = type === "shack" ? 3 : 8;
  return <RegularPolygon radius={25} sides={numSides} fill={color} />;
}
