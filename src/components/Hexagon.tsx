import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { useEffect, useState } from "react";
import { RegularPolygon, Image } from "react-konva";

import { GRID_HEX_SIZE } from "../utils";

export function MyHexagon({
  id,
  x,
  y,
  coordx,
  coordy,
  color,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`${id} [${coordx},${coordy}] terrain ${color}`);
  }
  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      stroke={"brown"}
      strokeWidth={3}
      radius={radius}
      rotation={90}
      fill={color}
      onClick={handleClick}
    />
  );
}

export function AnimalHexagon({
  id,
  x,
  y,
  coordx,
  coordy,
  color,
  animal,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  animal: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`${id} [${coordx},${coordy}] terrain ${color} ${animal}`);
  }

  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    const winimg = new window.Image(20, 20);
    winimg.src = animal === "bear" ? "print-bear.svg" : "print-cougar.svg";

    setImage(winimg);
  }, []);

  return (
    <>
      <RegularPolygon
        x={x}
        y={y}
        sides={6}
        stroke={"brown"}
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
      <Image image={image} x={x - 10} y={y + 10} />
    </>
  );
}
