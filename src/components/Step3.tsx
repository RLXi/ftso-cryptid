import { Button, Stepper } from "@mantine/core";

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
    </>
  );
}
