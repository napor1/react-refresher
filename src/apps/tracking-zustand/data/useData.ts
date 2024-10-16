import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Thing } from "@/apps/tracking-common/type";

interface ThingsState {
  things: Thing[];
  currentThing: string | null;
  seeThing: (newThing: string) => void;
  seeAllThings: () => void;
  addThing: (name: string) => void;
  removeThing: (id: string) => void;
  doThing: (id: string) => void;
  undoThing: (id: string, index: number) => void;
}
export const useThingsStore = create<ThingsState>()(
  persist(
    immer((set) => ({
      things: [],
      currentThing: null,
      seeThing: (newThing) =>
        set((draft) => {
          draft.currentThing = newThing;
        }),
      seeAllThings: () =>
        set((draft) => {
          draft.currentThing = null;
        }),
      addThing: (name) =>
        set((draft) => {
          draft.things.push({ id: uuid(), name, done: [] });
        }),
      removeThing: (id) =>
        set((draft) => {
          const index = draft.things.findIndex((thing) => thing.id === id);
          if (index !== -1) {
            draft.things.splice(index, 1);
            if (id === draft.currentThing) {
              draft.currentThing = null;
            }
          }
        }),
      doThing: (id) =>
        set((draft) => {
          const thing = draft.things.find((thing) => thing.id === id);
          thing!.done.push(Date.now());
        }),
      undoThing: (id, index) =>
        set((draft) => {
          const thing = draft.things.find((thing) => thing.id === id);
          thing!.done.splice(index, 1);
        }),
    })),
    { name: "100-things-zustand" }
  )
);
