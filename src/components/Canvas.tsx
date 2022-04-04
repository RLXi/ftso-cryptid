import React from "react";
import { Stage, Layer } from "react-konva";
import PlayerMarker from "./PlayerMarker";
import { Structure } from "./Structure";
import { Player } from "../utils";
import { useViewportSize } from "@mantine/hooks";
export function Canvas({
  structures,
  hexes,
}: {
  structures: any[];
  hexes: any[];
}) {
  const a = useViewportSize();
  return (
    <Stage
      width={a.width - a.width * 0.1}
      height={a.height}
      offsetX={-200}
      offsetY={-200}
      style={{
        backgroundColor: "var(--gray-9)",
      }}
    >
      {/* Map layer */}
      <Layer>{hexes.map((hex: any) => hex)}</Layer>

      {/* Clue layer */}
      <Layer></Layer>

      {/* Structure layer */}
      <Layer>
        <Structure type={"shack"} color={"green"} x={90} y={60} />
        <Structure type={"stone"} color={"green"} x={90} y={100} />
        <Structure type={"shack"} color={"blue"} x={190} y={60} />
        <Structure type={"stone"} color={"blue"} x={190} y={100} />
        <Structure type={"shack"} color={"white"} x={290} y={60} />
        <Structure type={"stone"} color={"white"} x={290} y={100} />
        {structures.map((struct) => struct)}
      </Layer>

      {/* Player marker layer */}
      <Layer>
        <PlayerMarker type="yes" player={Player("alpha")} x={0} y={0} />
        <PlayerMarker type="no" player={Player("alpha")} x={20} y={10} />
        <PlayerMarker type="yes" player={Player("beta")} x={0} y={53} />
        <PlayerMarker type="no" player={Player("beta")} x={40} y={10} />
      </Layer>
    </Stage>
  );
}
