import { defineGrid, extendHex } from "honeycomb-grid";

export function MyGrid(
  size: number,
  width: number = 12,
  height: number = 9,
  orientation: "pointy" | "flat" = "flat"
) {
  const Hex = extendHex({
    size,
    orientation,
  });
  return defineGrid(Hex).rectangle({ width, height });
}
