import { Stage, Layer, RegularPolygon, KonvaNodeComponent } from "react-konva";
import { useViewportSize, useMouse } from "@mantine/hooks";
import { Drawer, Button, Stepper, Group } from "@mantine/core";
import PlayerMarker from "./components/PlayerMarker";
import { Player } from "./utils";
import Structure, { IStructure } from "./components/Structure";

import "./App.css";
import { useState, ReactNode } from "react";

import { useMap } from "./hooks";

function App() {
  const a = useViewportSize();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(1);
  const { ref, x: mx, y: my } = useMouse();
  const structures: ReactNode[] = [];
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const hexes = useMap();

  function addStructure({ color, type }: IStructure) {
    return structures.push(
      <Structure color={color} type={type} x={mx} y={my} />
    );
  }

  const iconSize = 32;
  return (
    <div className="App">
      <Button onClick={() => setIsOpen(true)}>Open map</Button>
      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Map"
        position="bottom"
        size="full"
      >
        <Stepper iconSize={iconSize} active={active} onStepClick={setActive}>
          <Stepper.Step label="Blue Shack" description="Place structure">
            Step 1: Place the Blue Shack
          </Stepper.Step>
          <Stepper.Step label="Blue Stone" description="Place structure">
            Step 2: Place the Blue Stone
          </Stepper.Step>
          <Stepper.Step label="Green Shack" description="Place structure">
            Step 3: Place the Green Shack
          </Stepper.Step>
          <Stepper.Step label="Green Stone" description="Place structure">
            Step 4: Place the Green Stone
          </Stepper.Step>
          <Stepper.Step label="White Shack" description="Place structure">
            Step 5: Place the White Shack
          </Stepper.Step>
          <Stepper.Step label="White Stone" description="Place structure">
            Step 6: Place the White Stone
          </Stepper.Step>
        </Stepper>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
        <Stage
          width={a.width - a.width * 0.1}
          height={a.height}
          offsetX={-200}
          offsetY={-200}
          style={{ backgroundColor: "var(--gray-9)" }}
        >
          {/* Map layer */}
          <Layer draggable>{hexes.map((hex: any) => hex)}</Layer>

          {/* Structure layer */}

          <Layer>
            <Structure type={"shack"} color={"green"} x={90} y={60} />
            <Structure type={"stone"} color={"green"} x={90} y={100} />
            <Structure type={"shack"} color={"blue"} x={190} y={60} />
            <Structure type={"stone"} color={"blue"} x={190} y={100} />
            <Structure type={"shack"} color={"white"} x={290} y={60} />
            <Structure type={"stone"} color={"white"} x={290} y={100} />
            {structures.map((struct) => struct)}
          </Layer>

          {/* Player marker layer */}
          <Layer>
            <PlayerMarker type="yes" player={Player("alpha")} x={0} y={0} />
            <PlayerMarker type="no" player={Player("alpha")} x={20} y={10} />
            <PlayerMarker type="yes" player={Player("beta")} x={0} y={53} />
            <PlayerMarker type="no" player={Player("beta")} x={40} y={10} />
          </Layer>
          {/* Clue layer */}
          <Layer></Layer>
        </Stage>
      </Drawer>
    </div>
  );
}

export default App;
