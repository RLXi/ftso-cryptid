import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { RegularPolygon } from "react-konva";
import { IStructurePosition } from "../types";

const ROTATION = 24;

export function Structure({ type, color, x, y }: IStructurePosition) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`structure ${type} ${color}`);
  }
  const numSides = type === "shack" ? 3 : 8;
  return (
    <RegularPolygon
      radius={15}
      sides={numSides}
      fill={color}
      stroke={color === "black" ? "white" : "black"}
      strokeWidth={2}
      rotation={type === "stone" ? ROTATION : 0}
      x={x}
      y={y}
      onClick={handleClick}
    />
  );
}
