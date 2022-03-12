import { Button, Stepper } from "@mantine/core";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

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
  return (
    <>
      <Button variant="default" onClick={prevSetupStep}>
        Back
      </Button>
      <Button onClick={nextSetupStep}>Next step</Button>

      <Stepper
        iconSize={iconSize}
        active={setupStep}
        onStepClick={setSetupStep}
      >
        <Stepper.Step label="Game mode">
          <Step1
            playerNum={playerNum}
            setPlayerNum={setPlayerNum}
            advanced={advanced}
            setAdvanced={setAdvanced}
          />
        </Stepper.Step>
        <Stepper.Step label="Construct map">
          <Step2 />
        </Stepper.Step>
        <Stepper.Step label="Place buildings">
          <Step3
            iconSize={iconSize}
            active={active}
            setActive={setActive}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </Stepper.Step>
        <Stepper.Step label="Select initial clues">
          <Step4 />
        </Stepper.Step>
      </Stepper>
    </>
  );
}
