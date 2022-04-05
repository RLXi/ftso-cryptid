import { Body } from "./components";
import { AppShell, Center } from "@mantine/core";
import setupContext from "./SetupContext";

import "./App.css";
import { useState, useContext } from "react";

function App() {
  const setup = useContext(setupContext);
  const [setupStep, setSetupStep] = useState(0);
  const [active, setActive] = useState(0);
  const [advanced, setAdvanced] = useState(false);
  const [playerNum, setPlayerNum] = useState(3);

  setup.setGameMode(advanced ? "advanced" : "normal");

  const nextSetupStep = () =>
    setSetupStep((current: number) => {
      // map generation step
      if (current === 1) {
        const mapIds = Object.entries(setup.mapLayout);
        const num = new Set(mapIds.map((entry) => entry[1].tile));

        if (num.size !== 6) {
          alert("Please select 6 different tiles for the map.");
          return current;
        }
      }

      return current < 4 ? current + 1 : current;
    });
  const prevSetupStep = () =>
    setSetupStep((current: number) => (current > 0 ? current - 1 : current));

  const nextStep = () => {
    if (setup.gameMode === "advanced")
      setActive((current: number) => (current < 8 ? current + 1 : current));
    else setActive((current: number) => (current < 6 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current: number) => (current > 0 ? current - 1 : current));

  return (
    <AppShell padding={"md"}>
      <Center>
        <h1>WIP</h1>
      </Center>
      <Body
        prevSetupStep={prevSetupStep}
        nextSetupStep={nextSetupStep}
        setupStep={setupStep}
        setSetupStep={setSetupStep}
        advanced={advanced}
        setAdvanced={setAdvanced}
        active={active}
        setActive={setActive}
        prevStep={prevStep}
        nextStep={nextStep}
        setPlayerNum={setPlayerNum}
        playerNum={playerNum}
      />
      {/* <Canvas structures={structures} hexes={hexes} /> */}
      {/* <Button onClick={() => setIsOpen(true)}>Open map</Button> */}
      {/* <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Map"
        position="bottom"
        size=""
      ></Drawer> */}
    </AppShell>
  );
}

export default App;
