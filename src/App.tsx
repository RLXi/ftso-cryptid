import React from "react";
import { Stage, Layer, RegularPolygon } from "react-konva";
import MyGrid from "MyGrid";
import Konva from "konva";

import "./App.css";

function MyHexagon({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color?: string | null;
}) {
  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      radius={30}
      rotation={90}
      fill={color || Konva.Util.getRandomColor()}
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
  color?: string | null;
}) {
  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      radius={30}
      rotation={90}
      fill={color || Konva.Util.getRandomColor()}
    />
  );
}

function App() {
  // console.log(HoneycombGrid);
  const map = MyGrid(30);
  const hexes: any[] = [];
  const otherSet: any[] = [];
  map.forEach((hex, idx) => {
    const point = hex.toPoint();
    hexes.push(
      <MyHexagon x={point.x} y={point.y} key={`${point.x}${point.y}`} />
    );
  });
  return (
    <div className="App">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        offsetX={-50}
        offsetY={-50}
      >
        <Layer>{hexes.map((hex: any) => hex)}</Layer>
        <Layer>{otherSet.map((hex: any, i: number) => hex)}</Layer>
      </Stage>
    </div>
  );
}

export default App;
