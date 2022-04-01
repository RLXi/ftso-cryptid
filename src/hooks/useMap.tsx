import { Center, Slider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState, useContext, useMemo } from "react";
import { Stage } from "react-konva";
import SetupContext from "../SetupContext";

function RenderMap({
  width,
  height,
  gridScale,
  gridScaleEnd,
  setGridScale,
  setGridScaleEnd,
}: {
  width: number;
  height: number;
  gridScale: number;
  gridScaleEnd: number;
  setGridScale: (n: number) => void;
  setGridScaleEnd: (n: number) => void;
}) {
  return (
    <>
      <Center>
        <div>
          Grid scale: {gridScale.toFixed(2)}
          <br />
          <Slider
            value={gridScale}
            onChange={setGridScale}
            onChangeEnd={setGridScaleEnd}
            min={0.1}
            max={2}
            step={0.01}
          />
        </div>
      </Center>
      <Stage
        width={width}
        height={height}
        offsetX={-50}
        offsetY={-50}
        style={{
          backgroundColor: "var(--gray-9)",
        }}
        scale={{
          x: gridScaleEnd,
          y: gridScaleEnd,
        }}
        draggable
      ></Stage>
    </>
  );
}

export function useMap() {
  const [gridScale, setGridScale] = useState(1);
  const [gridScaleEnd, setGridScaleEnd] = useState(1);
  const a = useViewportSize();
  const setup = useContext(SetupContext);
  const map = setup.mapLayout;

  const Map = useMemo(() => {
    return () => (
      <RenderMap
        width={a.width - 150}
        height={a.height - 150}
        gridScale={gridScale}
        gridScaleEnd={gridScaleEnd}
        setGridScale={setGridScale}
        setGridScaleEnd={setGridScaleEnd}
      />
    );
  }, [gridScale, gridScaleEnd, a.height, a.width]);
  return { Map };
}
