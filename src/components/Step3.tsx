import { Button, Stepper } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useContext } from "react";
import { Layer, Stage } from "react-konva";
import SetupContext from "../SetupContext";
import { MapTiles } from "./MapTiles";

import {
  tile1,
  tile1f,
  tile2,
  tile2f,
  tile3,
  tile3f,
  tile4,
  tile4f,
  tile5,
  tile5f,
  tile6,
  tile6f,
} from "../utils";

export function Step3({
  iconSize,
  active,
  setActive,
  prevStep,
  nextStep,
}: {
  iconSize: number;
  active: number;
  setActive: (n: number) => void;
  prevStep: () => void;
  nextStep: () => void;
}) {
  const tiles: any = {
    tile1,
    tile2,
    tile3,
    tile4,
    tile5,
    tile6,
    tile1f,
    tile2f,
    tile3f,
    tile4f,
    tile5f,
    tile6f,
  };
  const setup = useContext(SetupContext);
  const a = useViewportSize();

  const mapTilesArray = setup.mapLayout.split(",");
  const offsetX = -450;
  const offsetY = -260;

  return (
    <>
      <Stepper iconSize={iconSize} active={active} onStepClick={setActive}>
        <Stepper.Step label="Blue Shack">
          Step 1: Place the Blue Shack
        </Stepper.Step>
        <Stepper.Step label="Blue Stone">
          Step 2: Place the Blue Stone
        </Stepper.Step>
        <Stepper.Step label="Green Shack">
          Step 3: Place the Green Shack
        </Stepper.Step>
        <Stepper.Step label="Green Stone">
          Step 4: Place the Green Stone
        </Stepper.Step>
        <Stepper.Step label="White Shack">
          Step 5: Place the White Shack
        </Stepper.Step>
        <Stepper.Step label="White Stone">
          Step 6: Place the White Stone
        </Stepper.Step>
      </Stepper>

      <Button variant="default" onClick={prevStep}>
        Back
      </Button>
      <Button onClick={nextStep}>Next step</Button>
      <Stage
        width={a.width - a.width * 0.1}
        height={a.height}
        offsetX={-200}
        offsetY={-200}
        style={{
          backgroundColor: "var(--gray-9)",
        }}
      >
        <Layer>
          <MapTiles tileset={tiles[mapTilesArray[0]]} />
          <MapTiles tileset={tiles[mapTilesArray[1]]} offsetX={offsetX} />
          <MapTiles tileset={tiles[mapTilesArray[2]]} offsetY={offsetY} />
          <MapTiles
            tileset={tiles[mapTilesArray[3]]}
            offsetX={offsetX}
            offsetY={offsetY}
          />
          <MapTiles tileset={tiles[mapTilesArray[4]]} offsetY={offsetY - 260} />
          <MapTiles
            tileset={tiles[mapTilesArray[5]]}
            offsetX={offsetX}
            offsetY={offsetY - 260}
          />
        </Layer>
      </Stage>
    </>
  );
}
