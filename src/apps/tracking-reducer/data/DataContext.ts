import { createContext } from "use-context-selector";

type ActionMap<A> = {
  [K in keyof A]: (payload?: A[K]) => void;
};

export interface Thing {
  id: string;
  name: string;
  done: number[];
}

export interface ThingsState {
  readonly things: Thing[];
  readonly currentThing: string | null;
}

export interface ThingsContext {
  state: ThingsState;
  actions: ActionMap<{
    seeThing: string;
    seeAllThings: unknown;
    addThing: string;
    removeThing: string;
    doThing: string;
    undoThing: {
      id: string;
      index: number;
    };
  }>;
}

export const DataContext = createContext<ThingsContext | null>(null);
