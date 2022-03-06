import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { RegularPolygon } from "react-konva";

import { GRID_HEX_SIZE } from "utils/contants";

export function MyHexagon({
  x,
  y,
  color,
  radius = GRID_HEX_SIZE - 1,
}: {
  x: number;
  y: number;
  color: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`terrain ${color}`);
  }
  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      stroke={"white"}
      strokeWidth={3}
      radius={radius}
      rotation={90}
      fill={color}
      onClick={handleClick}
    />
  );
}

export function AnimalHexagon({
  x,
  y,
  color,
  animal,
  radius = GRID_HEX_SIZE - 1,
}: {
  x: number;
  y: number;
  color: string;
  animal: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`terrain ${color} ${animal}`);
  }
  return (
    <>
      <RegularPolygon
        x={x}
        y={y}
        sides={6}
        stroke={"white"}
        strokeWidth={3}
        radius={radius}
        rotation={90}
        fill={color}
        onClick={handleClick}
      />
      <RegularPolygon
        x={x}
        y={y}
        sides={6}
        stroke={animal === "bear" ? "black" : "red"}
        strokeWidth={5}
        radius={radius - 4}
        rotation={90}
        fill={color}
        onClick={handleClick}
      />
    </>
  );
}
