import React from "react";
import { IPlayer } from "./Player";
import { Rect, Circle } from "react-konva";

interface IMarker {
  player: IPlayer;
  type: "yes" | "no";
}

interface IPosition {
  x: number;
  y: number;
}

interface ISize {
  width: number;
  height: number;
  radius: number;
}

const STANDARD_SIZE = 15;

function PlayerMarker({
  player,
  type,
  x,
  y,
  radius = STANDARD_SIZE,
  width = STANDARD_SIZE,
  height = STANDARD_SIZE,
}: IMarker & IPosition & ISize) {
  if (type === "yes")
    return <Circle x={x} y={y} radius={radius} fill={player.color} />;
  return <Rect x={x} y={y} width={width} height={height} fill={player.color} />;
}
