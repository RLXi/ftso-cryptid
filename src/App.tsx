import { Stage, Layer, RegularPolygon } from "react-konva";
import { useViewportSize } from "@mantine/hooks";
import MyGrid from "./utils/MyGrid";
import PlayerMarker from "./components/PlayerMarker";
import Player from "./utils/Player";
import Structure from "./components/Structure";
import Konva from "konva";

import "./App.css";
import { SyntheticEvent } from "react";
import { KonvaPointerEvent } from "konva/lib/PointerEvents";

const terrainColorList = ["yellow", "green", "gray", "blue", "purple"];
const GRID_HEX_SIZE = 50;

function MyHexagon({
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
      stroke={"black"}
      strokeWidth={2}
      radius={radius}
      rotation={90}
      fill={color}
      onClick={handleClick}
    />
  );
}

function AnimalHexagon({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: string;
}) {
  function handleClick(e: KonvaPointerEvent) {
    console.log(`terrain ${color}`);
  }
  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      stroke={"black"}
      strokeWidth={2}
      radius={GRID_HEX_SIZE}
      rotation={90}
      fill={color}
      onClick={handleClick}
    />
  );
}

function App() {
  const a = useViewportSize();

  const map = MyGrid(GRID_HEX_SIZE);
  const hexes: any[] = [];
  const otherSet: any[] = [];
  map.forEach((hex) => {
    const point = hex.toPoint();
    hexes.push(
      <MyHexagon
        x={point.x}
        y={point.y}
        key={`${point.x}${point.y}`}
        color={
          terrainColorList[Math.floor(Math.random() * terrainColorList.length)]
        }
      />
    );
  });
  return (
    <div className="App">
      <Stage width={a.width} height={a.height} offsetX={-100} offsetY={-100}>
        {/* Map layer */}
        <Layer>{hexes.map((hex: any) => hex)}</Layer>

        {/* Structure layer */}

        <Layer>
          <Structure type={"shack"} color={"green"} x={90} y={60} />
          <Structure type={"stone"} color={"green"} x={90} y={100} />
          <Structure type={"shack"} color={"blue"} x={190} y={60} />
          <Structure type={"stone"} color={"blue"} x={190} y={100} />
          <Structure type={"shack"} color={"white"} x={290} y={60} />
          <Structure type={"stone"} color={"white"} x={290} y={100} />
        </Layer>

        {/* Player marker layer */}
        <Layer>
          <PlayerMarker type="yes" player={Player("alpha")} x={0} y={0} />
          <PlayerMarker type="no" player={Player("alpha")} x={20} y={10} />
          <PlayerMarker type="yes" player={Player("beta")} x={0} y={53} />
          <PlayerMarker type="no" player={Player("beta")} x={40} y={10} />
          <Structure type={"shack"} color={"green"} x={90} y={60} />
        </Layer>
        {/* Clue layer */}
        <Layer></Layer>
      </Stage>
    </div>
  );
}

export default App;
