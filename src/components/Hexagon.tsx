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
  getCoordinates,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  type: string;
  getCoordinates?: () => void;
  radius?: number;
}) {
  const txt = type ? type.slice(0)[0].toUpperCase() : "T";
  const coordinatesText = `{${coordx},${coordy}}`;
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
        onClick={getCoordinates}
      />
      <Text
        text={txt}
        x={x - 5}
        y={y - 35}
        fontSize={16}
        strokeWidth={1}
        stroke={"black"}
        onClick={getCoordinates}
      />
      <Text
        text={coordinatesText}
        x={coordx > 9 ? x - 19 : x - 15}
        y={y + 20}
        fontSize={14}
        strokeWidth={0.5}
        stroke={"black"}
        onClick={getCoordinates}
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
  getCoordinates,
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
  getCoordinates?: () => void;
  radius?: number;
}) {
  // const [image, setImage] = useState<any>(null);
  const txt = type ? type.slice(0)[0].toUpperCase() : "T";
  const coordinatesText = `{${coordx},${coordy}}`;

  // useEffect(() => {
  //   const winimg = new window.Image(20, 20);
  //   winimg.src = animal === "bear" ? printBear : printCougar;

  //   setImage(winimg);
  // }, []);

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
        onClick={getCoordinates}
      />
      {/* <Image image={image} x={x - 10} y={y + 10} /> */}
      <Text
        text={txt}
        x={x - 5}
        y={y - 35}
        fontSize={16}
        strokeWidth={1}
        stroke={"black"}
        onClick={getCoordinates}
      />
      <Text
        text={coordinatesText}
        x={coordx > 9 ? x - 19 : x - 15}
        y={y + 20}
        fontSize={14}
        strokeWidth={0.5}
        stroke={"black"}
        onClick={getCoordinates}
      />
    </>
  );
}

export function AllPurposeHexagon({
  id,
  x,
  y,
  coordx,
  coordy,
  color,
  type,
  animal,
  getCoordinates,
  radius = GRID_HEX_SIZE - 1,
}: {
  id: number;
  x: number;
  y: number;
  coordx: number;
  coordy: number;
  color: string;
  type: string;
  animal?: string;
  getCoordinates?: () => void;
  radius?: number;
}) {
  // const [image, setImage] = useState<any>(null);
  const txt = type ? type.slice(0)[0].toUpperCase() : "T";
  const coordinatesText = `{${coordx},${coordy}}`;

  // useEffect(() => {
  //   if (animal) {
  //     const winimg = new window.Image(20, 20);
  //     winimg.src = animal === "bear" ? printBear : printCougar;

  //     setImage(winimg);
  //   }
  // }, []);

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
      {animal ? (
        <RegularPolygon
          x={x}
          y={y}
          sides={6}
          stroke={animal === "bear" ? "black" : "red"}
          strokeWidth={5}
          radius={radius - 4}
          rotation={90}
          fill={color}
          onClick={getCoordinates}
        />
      ) : null}
      {/* <Image image={image} x={x - 10} y={y + 10} /> */}
      <Text
        text={txt}
        x={x - 5}
        y={y - 35}
        fontSize={16}
        strokeWidth={1}
        stroke={"black"}
        onClick={getCoordinates}
      />
      <Text
        text={coordinatesText}
        x={coordx > 9 ? x - 19 : x - 15}
        y={y + 20}
        fontSize={14}
        strokeWidth={0.5}
        stroke={"black"}
        onClick={getCoordinates}
      />
    </>
  );
}
