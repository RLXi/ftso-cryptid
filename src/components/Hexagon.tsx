import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { useEffect, useState } from "react";
import { RegularPolygon, Image, Text } from "react-konva";

import { GRID_HEX_SIZE } from "../utils";

import printBear from "../assets/print-bear.svg";
import printCougar from "../assets/print-cougar.svg";

export function BasicHexagon({
  id,
  x,
  y,
  coordx,
  coordy,
  color,
  type,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  type: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`${id} [${coordx},${coordy}] terrain ${color}`);
  }
  const txt = type ? type.slice(0)[0].toUpperCase() : "T";

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
      <Text
        text={txt}
        x={x - 5}
        y={y - 30}
        fontSize={16}
        strokeWidth={1}
        stroke={"black"}
      />
    </>
  );
}

export function AnimalHexagon({
  id,
  x,
  y,
  coordx,
  coordy,
  color,
  type,
  animal,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  type: string;
  animal: string;
  radius?: number;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`${id} [${coordx},${coordy}] terrain ${color} ${animal}`);
  }

  const [image, setImage] = useState<any>(null);
  const txt = type ? type.slice(0)[0].toUpperCase() : "T";
  useEffect(() => {
    const winimg = new window.Image(20, 20);
    winimg.src = animal === "bear" ? printBear : printCougar;

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
      <Text
        text={txt}
        x={x - 5}
        y={y - 30}
        fontSize={16}
        strokeWidth={1}
        stroke={"black"}
      />
    </>
  );
}
