import { Button, Center, Stepper } from "@mantine/core";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Error } from "./ErrorBoundary";
import { useContext } from "react";
import SetupContext, { NumPlayersType } from "../SetupContext";

export function Header({
  prevSetupStep,
  nextSetupStep,
  setupStep,
  setSetupStep,
  advanced,
  setAdvanced,
  active,
  setActive,
  prevStep,
  nextStep,
  setPlayerNum,
  playerNum,
}: {
  prevSetupStep: () => void;
  nextSetupStep: () => void;
  setupStep: number;
  setSetupStep: (n: number) => void;
  advanced: boolean;
  setAdvanced: (b: boolean) => void;
  active: number;
  setActive: (n: number) => void;
  prevStep: () => void;
  nextStep: () => void;
  setPlayerNum: (s: number) => void;
  playerNum: number;
}) {
  const iconSize = 32;
  const setup = useContext(SetupContext);

  function handleChangePlayerNum(e: string) {
    setPlayerNum(parseInt(e));
    setup.setNumPlayers(parseInt(e) as NumPlayersType);
  }
  return (
    <>
      <Center>
        <Button variant="default" onClick={prevSetupStep}>
          Back
        </Button>
        <Button onClick={nextSetupStep}>Next step</Button>
      </Center>
      <Center>
        <Stepper
          iconSize={iconSize}
          active={setupStep}
          onStepClick={setSetupStep}
        >
          <Stepper.Step label="Game mode">
            <Error>
              <Step1
                playerNum={setup.numPlayers}
                advanced={advanced}
                setAdvanced={setAdvanced}
                handleChange={handleChangePlayerNum}
              />
            </Error>
          </Stepper.Step>
          <Stepper.Step label="Construct map">
            <Error>
              <Step2 />
            </Error>
          </Stepper.Step>
          <Stepper.Step label="Place buildings">
            <Error>
              <Step3
                iconSize={iconSize}
                active={active}
                setActive={setActive}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            </Error>
          </Stepper.Step>
          <Stepper.Step label="Select initial clues">
            <Error>
              <Step4 />
            </Error>
          </Stepper.Step>
        </Stepper>
      </Center>
    </>
  );
}
