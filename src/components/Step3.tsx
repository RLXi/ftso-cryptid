import { Button, List, Stepper } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
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
  const setup = useContext(SetupContext);
  const { Map, lastClickCoordinates } = useMap();

  useEffect(() => {
    switch (active) {
      case 0:
        setup.setStructurePositions({
          type: "greenshack",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 1:
        setup.setStructurePositions({
          type: "greenstone",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 2:
        setup.setStructurePositions({
          type: "blueshack",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 3:
        setup.setStructurePositions({
          type: "bluestone",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 4:
        setup.setStructurePositions({
          type: "whiteshack",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 5:
        setup.setStructurePositions({
          type: "whitestone",
          newPosition: lastClickCoordinates,
        });
        nextStep();
        break;
      case 6:
        if (setup.gameMode === "advanced") {
          setup.setStructurePositions({
            type: "blackshack",
            newPosition: lastClickCoordinates,
          });
          nextStep();
        }
        break;
      case 7:
        if (setup.gameMode === "advanced") {
          setup.setStructurePositions({
            type: "blackstone",
            newPosition: lastClickCoordinates,
          });
          nextStep();
        }
        break;
    }
  }, [lastClickCoordinates]);

  const struct = Object.values(setup.structurePositions);

  return (
    <>
      <Stepper iconSize={iconSize} active={active} onStepClick={setActive}>
        {struct.map((structure: IStructurePosition, idx) => {
          if (structure.color === "black" && setup.gameMode !== "advanced")
            return null;
          return (
            <Stepper.Step
              key={structure.color + "-" + structure.type}
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
        {struct.map((structure: IStructurePosition, idx) => {
          if (structure.color === "black" && setup.gameMode !== "advanced")
            return null;
          return (
            <List.Item key={structure.color + "-" + structure.type}>
              {structure.color} {structure.type}{" "}
              {structure.type === "shack" ? (
                <BsFillTriangleFill style={{ verticalAlign: "sub" }} />
              ) : (
                <BsFillOctagonFill style={{ verticalAlign: "sub" }} />
              )}{" "}
              {"{"}
              {structure.x},{structure.y}
              {"} "}
            </List.Item>
          );
        })}
      </List>
      <Map />
    </>
  );
}
