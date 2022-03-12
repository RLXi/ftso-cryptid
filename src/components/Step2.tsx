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
import { Group, Radio, RadioGroup, Stepper, Switch } from "@mantine/core";
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
  const setupTiles = setup.mapLayout.split(",");

  const [pos1, setPos1] = useState(
    setupTiles[0].length > 5 ? setupTiles[0].slice(0, 5) : setupTiles[0]
  );
  const [pos2, setPos2] = useState(
    setupTiles[1].length > 5 ? setupTiles[1].slice(0, 5) : setupTiles[1]
  );
  const [pos3, setPos3] = useState(
    setupTiles[2].length > 5 ? setupTiles[2].slice(0, 5) : setupTiles[2]
  );
  const [pos4, setPos4] = useState(
    setupTiles[3].length > 5 ? setupTiles[3].slice(0, 5) : setupTiles[3]
  );
  const [pos5, setPos5] = useState(
    setupTiles[4].length > 5 ? setupTiles[4].slice(0, 5) : setupTiles[4]
  );
  const [pos6, setPos6] = useState(
    setupTiles[5].length > 5 ? setupTiles[5].slice(0, 5) : setupTiles[5]
  );

  const [flip1, setFlip1] = useState(setupTiles[0].length > 5);
  const [flip2, setFlip2] = useState(setupTiles[1].length > 5);
  const [flip3, setFlip3] = useState(setupTiles[2].length > 5);
  const [flip4, setFlip4] = useState(setupTiles[3].length > 5);
  const [flip5, setFlip5] = useState(setupTiles[4].length > 5);
  const [flip6, setFlip6] = useState(setupTiles[5].length > 5);

  const [finalPosString, setFinalPosString] = useState(setup.mapLayout);
  const finalPos1 = `${pos1 + (flip1 ? "f" : "")}`;
  const finalPos2 = `${pos2 + (flip2 ? "f" : "")}`;
  const finalPos3 = `${pos3 + (flip3 ? "f" : "")}`;
  const finalPos4 = `${pos4 + (flip4 ? "f" : "")}`;
  const finalPos5 = `${pos5 + (flip5 ? "f" : "")}`;
  const finalPos6 = `${pos6 + (flip6 ? "f" : "")}`;

  useEffect(() => {
    console.log(setup.mapLayout);

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
    setup.setMapLayout(finalPosString!);
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
      <MapTileChoice
        radioLabel="First"
        radioName="first"
        switchName="first"
        pos={pos1}
        setPos={setPos1}
        flip={flip1}
        setFlip={setFlip1}
      />
      <MapTileChoice
        radioLabel="Second"
        radioName="second"
        switchName="second"
        pos={pos2}
        setPos={setPos2}
        flip={flip2}
        setFlip={setFlip2}
      />
      <MapTileChoice
        radioLabel="Third"
        radioName="third"
        switchName="third"
        pos={pos3}
        setPos={setPos3}
        flip={flip3}
        setFlip={setFlip3}
      />
      <MapTileChoice
        radioLabel="Fourth"
        radioName="fourth"
        switchName="fourth"
        pos={pos4}
        setPos={setPos4}
        flip={flip4}
        setFlip={setFlip4}
      />
      <MapTileChoice
        radioLabel="Fifth"
        radioName="fifth"
        switchName="fifth"
        pos={pos5}
        setPos={setPos5}
        flip={flip5}
        setFlip={setFlip5}
      />
      <MapTileChoice
        radioLabel="Sixth"
        radioName="sixth"
        switchName="sixth"
        pos={pos6}
        setPos={setPos6}
        flip={flip6}
        setFlip={setFlip6}
      />
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

interface IMapTileChoice {
  radioName: string;
  radioLabel: string;
  switchName: string;
  pos: string;
  flip: boolean;
  setPos: (s: string) => void;
  setFlip: (b: boolean) => void;
}

function MapTileChoice({
  radioName: name,
  radioLabel: label,
  switchName,
  pos,
  setPos,
  flip,
  setFlip,
}: IMapTileChoice) {
  return (
    <Group>
      <RadioGroup
        label={label}
        required
        name={name}
        value={pos}
        onChange={(e) => setPos(e)}
      >
        <Radio value="tile1" label="Tile 1" />
        <Radio value="tile2" label="Tile 2" />
        <Radio value="tile3" label="Tile 3" />
        <Radio value="tile4" label="Tile 4" />
        <Radio value="tile5" label="Tile 5" />
        <Radio value="tile6" label="Tile 6" />
      </RadioGroup>
      <Switch
        label="Flipped"
        name={`${switchName}flipped`}
        checked={flip}
        onChange={(e) => setFlip(e.currentTarget.checked)}
      />
    </Group>
  );
}
