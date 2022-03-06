import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { RegularPolygon } from "react-konva";

export interface IStructure {
  type: "shack" | "stone";
  color: "blue" | "green" | "white" | "black";
}

interface IPosition {
  x: number;
  y: number;
}

const ROTATION = 24;

export default function Structure({
  type,
  color,
  x,
  y,
}: IStructure & IPosition) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`structure ${type} ${color}`);
  }
  const numSides = type === "shack" ? 3 : 8;
  return (
    <>
      <RegularPolygon
        radius={15}
        sides={numSides}
        fill={color}
        stroke={"black"}
        strokeWidth={2}
        rotation={type === "stone" ? ROTATION : 0}
        x={x}
        y={y}
        onClick={handleClick}
      />
    </>
  );
}
