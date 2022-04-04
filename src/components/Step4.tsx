import { useMap } from "../hooks";
import { useContext } from "react";
import SetupContext from "../SetupContext";

export function Step4() {
  const setup = useContext(SetupContext);
  const { Map } = useMap();

  return (
    <div>
      <Map />
    </div>
  );
}
