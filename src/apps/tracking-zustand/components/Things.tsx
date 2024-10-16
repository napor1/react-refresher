import { ThingDetail } from "./ThingDetail";
import { useCurrentThing } from "../data/useCurrentThing";
import { AllThings } from "./AllThings";

export function Things() {
  const currentThing = useCurrentThing();
  if (currentThing) {
    return <ThingDetail id={currentThing} />;
  }
  return <AllThings />;
}
