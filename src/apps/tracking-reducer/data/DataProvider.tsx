// import { PropsWithChildren } from "react";

import { produce } from "immer";
import { PropsWithChildren, useEffect } from "react";
import useReduction from "use-reduction";
import { v4 as uuid } from "uuid";
import { DataContext, ThingsState } from "./DataContext";

type Payload<T> = {
  payload: T;
};

const STORAGE_KEY = "tracking-reducer";

const INITIAL_STATE: ThingsState = JSON.parse(
  localStorage.getItem(STORAGE_KEY) as string
) || {
  things: [],
  currentThing: null,
};

const reducers = {
  seeThing: produce<ThingsState, [Payload<string>]>(
    (draft, { payload: id }) => {
      draft.currentThing = id;
    }
  ),
  seeAllThings: produce<ThingsState>((draft) => {
    draft.currentThing = null;
  }),
  addThing: produce<ThingsState, [Payload<string>]>(
    (draft, { payload: name }) => {
      draft.things.push({
        id: uuid(),
        name,
        done: [],
      });
    }
  ),
  removeThing: produce<ThingsState, [Payload<string>]>(
    (draft, { payload: id }) => {
      const index = draft.things.findIndex((item) => item.id === id);
      if (index !== -1) {
        draft.things.splice(index, 1);
        if (id === draft.currentThing) {
          draft.currentThing = null;
        }
      }
    }
  ),
  doThing: produce<ThingsState, [Payload<string>]>((draft, { payload: id }) => {
    const thing = draft.things.find((thing) => thing.id === id);
    thing!.done.push(Date.now());
  }),
  undoThing: produce<
    ThingsState,
    [
      Payload<{
        id: string;
        index: number;
      }>
    ]
  >((draft, { payload: { id, index } }) => {
    const thing = draft.things.find((thing) => thing.id === id);
    thing!.done.splice(index, 1);
  }),
};

export function DataProvider({ children }: PropsWithChildren) {
  const [state, actions] = useReduction(INITIAL_STATE, reducers);
  const value = { state, actions };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
