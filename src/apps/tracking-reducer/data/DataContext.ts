import { Thing } from "@/apps/tracking-common/type";
import { createContext } from "use-context-selector";

type ActionMap<A> = {
  [K in keyof A]: (payload?: A[K]) => void;
};


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
