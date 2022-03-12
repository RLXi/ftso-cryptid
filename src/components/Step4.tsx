import { useContext } from "react";
import SetupContext from "../SetupContext";
export function Step4() {
  const setup = useContext(SetupContext);
  console.log(setup.mapLayout);

  return <div>Step4</div>;
}
