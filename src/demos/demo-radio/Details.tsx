import { PropsWithChildren, useContext } from "react";
import { RadioOptionContext } from "./contexts";

export function Details({ children }: PropsWithChildren) {
  const { selected } = useContext(RadioOptionContext);

  return selected ? children : null;
}
