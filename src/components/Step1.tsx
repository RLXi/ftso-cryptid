import { RadioGroup, Radio, Checkbox } from "@mantine/core";

export function Step1({
  playerNum,
  advanced,
  setAdvanced,
  handleChange,
}: {
  playerNum: number;
  advanced: boolean;
  setAdvanced: (b: boolean) => void;
  handleChange: (s: string) => void;
}) {
  console.log(playerNum);

  return (
    <>
      <RadioGroup
        label="Select number of players"
        description=""
        required
        orientation="vertical"
        onChange={handleChange}
        value={playerNum.toString()}
        name="numPlayers"
      >
        <Radio value="2" label="2 players" />
        <Radio value="3" label="3 players" />
        <Radio value="4" label="4 players" />
        <Radio value="5" label="5 players" />
      </RadioGroup>
      <br />
      <Checkbox
        label="Advanced game"
        name="advanced"
        size="lg"
        checked={advanced}
        onChange={(e) => setAdvanced(e.currentTarget.checked)}
      />
    </>
  );
}
