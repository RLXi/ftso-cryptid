import { IPlayer } from "utils/Player";
import { Rect, Circle } from "react-konva";
import { KonvaPointerEvent } from "konva/lib/PointerEvents";

interface IMarker {
  player: IPlayer;
  type: "yes" | "no";
}

interface IPosition {
  x: number;
  y: number;
}

interface ISize {
  width?: number;
  height?: number;
  radius?: number;
}

const STANDARD_SIZE_YES = 10;
const STANDARD_SIZE_NO = 15;

export default function PlayerMarker({
  player,
  type,
  x,
  y,
  radius = type === "yes" ? STANDARD_SIZE_YES : STANDARD_SIZE_NO,
  width = type === "yes" ? STANDARD_SIZE_YES : STANDARD_SIZE_NO,
  height = type === "yes" ? STANDARD_SIZE_YES : STANDARD_SIZE_NO,
}: IMarker & IPosition & ISize) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`player marker ${player.color} ${type}`);
  }
  if (type === "yes")
    return (
      <>
        <Circle
          x={x}
          y={y}
          radius={radius}
          fill={player.color}
          stroke={"black"}
          strokeWidth={2}
          onClick={handleClick}
        />
      </>
    );
  return (
    <>
      <Rect
        x={x}
        y={y}
        stroke={"black"}
        strokeWidth={2}
        width={width}
        height={height}
        fill={player.color}
        onClick={handleClick}
      />
    </>
  );
}
