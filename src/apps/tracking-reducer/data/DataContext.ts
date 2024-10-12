import { createContext } from "use-context-selector";

type ActionMap<A> = {
  [K in keyof A]: (payload?: A[K]) => void;
};

export interface Thing {
  id: string;
  name: string;
  done: string[];
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
}>;
}

export const DataContext = createContext<ThingsContext | null>(null);
