import { useData } from "./useData";

export function useThing(id: string) {
  const thing = useData((context) =>
    context!.state.things.find((item) => item.id === id)
  );
  const { seeThing, seeAllThings, removeThing, doThing, undoThing } = useData(
    (context) => context!.actions
  );

  return {
    thing,
    seeAllThings,
    seeThing: () => seeThing(id),
    removeThing: () => removeThing(id),
    doThing: () => doThing(id),
    undoThing: (index: number) => undoThing({ id, index }),
    undoLastThing: () => undoThing({ id, index: thing!.done.length - 1 }),
  };
}
