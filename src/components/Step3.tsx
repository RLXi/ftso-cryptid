import { Button, List, Stepper } from "@mantine/core";
import { useContext } from "react";
import SetupContext from "../SetupContext";
import { BsFillTriangleFill, BsFillOctagonFill } from "react-icons/bs";
import { useMap } from "../hooks";
import { IStructurePosition } from "../types";

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
  const { Map } = useMap();

  const setup = useContext(SetupContext);

  const struct = Object.values(setup.structurePositions);

  return (
    <>
      <Stepper iconSize={iconSize} active={active} onStepClick={setActive}>
        {struct.map((structure: IStructurePosition, idx) => {
          if (structure.color === "black" && setup.gameMode !== "advanced")
            return null;
          return (
            <Stepper.Step
              style={{ textTransform: "capitalize" }}
              label={`${structure.color} ${structure.type}`}
            >
              Step {idx + 1}: Place the {`${structure.color} ${structure.type}`}
            </Stepper.Step>
          );
        })}
      </Stepper>

      {active !== 0 ? (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      ) : null}
      <Button onClick={nextStep}>Next step</Button>

      <List>
        <List.Item>
          Blue shack <BsFillTriangleFill style={{ verticalAlign: "sub" }} /> :{" "}
          {"{"}
          {setup.structurePositions["blue-shack"].x},
          {setup.structurePositions["blue-shack"].y}
          {"}"}
        </List.Item>
        <List.Item>
          Blue stone <BsFillOctagonFill style={{ verticalAlign: "sub" }} /> :{" "}
          {"{"}
          {setup.structurePositions["blue-stone"].x},
          {setup.structurePositions["blue-stone"].y}
          {"}"}
        </List.Item>
      </List>
      <Map />
    </>
  );
}
