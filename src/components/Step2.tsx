import { useViewportSize } from "@mantine/hooks";
import { Stage, Layer } from "react-konva";
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
import { useState, useContext, useEffect } from "react";
import { Checkbox, Group, Radio, RadioGroup, Stepper } from "@mantine/core";
import SetupContext, { ISetup } from "../SetupContext";

export function Step2() {
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
  const offsetX = -450;
  const offsetY = -260;
  const [pos1, setPos1] = useState("tile1");
  const [pos2, setPos2] = useState("tile2");
  const [pos3, setPos3] = useState("tile3");
  const [pos4, setPos4] = useState("tile4");
  const [pos5, setPos5] = useState("tile5");
  const [pos6, setPos6] = useState("tile6");

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);

  const [finalPosString, setFinalPosString] = useState(
    "tile1,tile2,tile3,tile4,tile5,tile6"
  );
  const finalPos1 = `${pos1 + (flip1 ? "f" : "")}`;
  const finalPos2 = `${pos2 + (flip2 ? "f" : "")}`;
  const finalPos3 = `${pos3 + (flip3 ? "f" : "")}`;
  const finalPos4 = `${pos4 + (flip4 ? "f" : "")}`;
  const finalPos5 = `${pos5 + (flip5 ? "f" : "")}`;
  const finalPos6 = `${pos6 + (flip6 ? "f" : "")}`;

  useEffect(() => {
    setFinalPosString(
      [finalPos1, finalPos2, finalPos3, finalPos4, finalPos5, finalPos6].join(
        ","
      )
    );
  }, [
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    flip1,
    flip2,
    flip3,
    flip4,
    flip5,
    flip6,
  ]);
  useEffect(() => {
    setup?.setMapLayout(finalPosString);
    console.log(setup?.mapLayout);
  }, [finalPosString]);

  return (
    <>
      {/* <Stepper active={0}>
        <Stepper.Step label="First tile"></Stepper.Step>
        <Stepper.Step label="Second tile"></Stepper.Step>
        <Stepper.Step label="Third tile"></Stepper.Step>
        <Stepper.Step label="Fourth tile"></Stepper.Step>
        <Stepper.Step label="Fifth tile"></Stepper.Step>
        <Stepper.Step label="Sixth tile"></Stepper.Step>
      </Stepper> */}
      <Group>
        <RadioGroup
          label="First"
          required
          name="First"
          value={pos1}
          onChange={(e) => setPos1(e)}
        >
          <Radio value="tile1" label="Tile 1" checked />
          <Radio value="tile2" label="Tile 2" />
          <Radio value="tile3" label="Tile 3" />
          <Radio value="tile4" label="Tile 4" />
          <Radio value="tile5" label="Tile 5" />
          <Radio value="tile6" label="Tile 6" />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="firstflipped"
          onChange={(e) => setFlip1(e.currentTarget.checked)}
        />
      </Group>
      <Group>
        <RadioGroup
          label="Second"
          required
          name="Second"
          value={pos2}
          onChange={(e) => setPos2(e)}
        >
          <Radio value="tile1" label="Tile 1" />
          <Radio value="tile2" label="Tile 2" checked />
          <Radio value="tile3" label="Tile 3" />
          <Radio value="tile4" label="Tile 4" />
          <Radio value="tile5" label="Tile 5" />
          <Radio value="tile6" label="Tile 6" />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="secondflipped"
          onChange={(e) => setFlip2(e.currentTarget.checked)}
        />
      </Group>
      <Group>
        <RadioGroup
          label="Third"
          required
          name="Third"
          value={pos3}
          onChange={(e) => setPos3(e)}
        >
          <Radio value="tile1" label="Tile 1" />
          <Radio value="tile2" label="Tile 2" />
          <Radio value="tile3" label="Tile 3" checked />
          <Radio value="tile4" label="Tile 4" />
          <Radio value="tile5" label="Tile 5" />
          <Radio value="tile6" label="Tile 6" />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="thirdflipped"
          onChange={(e) => setFlip3(e.currentTarget.checked)}
        />
      </Group>
      <Group>
        <RadioGroup
          label="Fourth"
          required
          name="Fourth"
          value={pos4}
          onChange={(e) => setPos4(e)}
        >
          <Radio value="tile1" label="Tile 1" />
          <Radio value="tile2" label="Tile 2" />
          <Radio value="tile3" label="Tile 3" />
          <Radio value="tile4" label="Tile 4" checked />
          <Radio value="tile5" label="Tile 5" />
          <Radio value="tile6" label="Tile 6" />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="fourthflipped"
          onChange={(e) => setFlip4(e.currentTarget.checked)}
        />
      </Group>
      <Group>
        <RadioGroup
          label="Fifth"
          required
          name="Fifth"
          value={pos5}
          onChange={(e) => setPos5(e)}
        >
          <Radio value="tile1" label="Tile 1" />
          <Radio value="tile2" label="Tile 2" />
          <Radio value="tile3" label="Tile 3" />
          <Radio value="tile4" label="Tile 4" />
          <Radio value="tile5" label="Tile 5" checked />
          <Radio value="tile6" label="Tile 6" />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="fifthflipped"
          onChange={(e) => setFlip5(e.currentTarget.checked)}
        />
      </Group>
      <Group>
        <RadioGroup
          label="Sixth"
          required
          name="Sixth"
          value={pos6}
          onChange={(e) => setPos6(e)}
        >
          <Radio value="tile1" label="Tile 1" />
          <Radio value="tile2" label="Tile 2" />
          <Radio value="tile3" label="Tile 3" />
          <Radio value="tile4" label="Tile 4" />
          <Radio value="tile5" label="Tile 5" />
          <Radio value="tile6" label="Tile 6" checked />
        </RadioGroup>
        <Checkbox
          label="Flipped"
          name="sixthflipped"
          onChange={(e) => setFlip6(e.currentTarget.checked)}
        />
      </Group>
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
          <MapTiles tileset={tiles[`${pos1 + (flip1 ? "f" : "")}`]} />
          <MapTiles
            tileset={tiles[`${pos2 + (flip2 ? "f" : "")}`]}
            offsetX={offsetX}
          />
          <MapTiles
            tileset={tiles[`${pos3 + (flip3 ? "f" : "")}`]}
            offsetY={offsetY}
          />
          <MapTiles
            tileset={tiles[`${pos4 + (flip4 ? "f" : "")}`]}
            offsetX={offsetX}
            offsetY={offsetY}
          />
          <MapTiles
            tileset={tiles[`${pos5 + (flip5 ? "f" : "")}`]}
            offsetY={offsetY - 260}
          />
          <MapTiles
            tileset={tiles[`${pos6 + (flip6 ? "f" : "")}`]}
            offsetX={offsetX}
            offsetY={offsetY - 260}
          />
        </Layer>
      </Stage>
    </>
  );
}
