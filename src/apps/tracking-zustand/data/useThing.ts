import { useThingsStore } from "./useData";

export function useThing(id: string) {
  const thing = useThingsStore((state) =>
    state.things.find((t) => t.id === id)
  );
  const seeThing = useThingsStore((state) => state.seeThing);
  const seeAllThings = useThingsStore((state) => state.seeAllThings);
  const doThing = useThingsStore((state) => state.doThing);
  const undoThing = useThingsStore((state) => state.undoThing);
  const removeThing = useThingsStore((state) => state.removeThing);
  return {
    thing,
    seeThing: () => seeThing(id),
    removeThing: () => removeThing(id),
    doThing: () => doThing(id),
    seeAllThings,
    undoThing: (index: number) => undoThing(id, index),
    undoLastThing: () => undoThing(id, thing!.done.length - 1),
  };
}
