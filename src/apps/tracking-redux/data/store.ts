import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Thing } from "../../tracking-common/type";
import { v4 as uuid } from "uuid";

export const STORAGE_KEY = "100-things-redux";

const getInitialThings = (): ThingsState =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || {
    things: [],
    currentThing: null,
  };

export interface ThingsState {
  things: Thing[];
  currentThing: null;
}

const thingsSlice = createSlice({
  name: "things",
  initialState: getInitialThings(),
  reducers: {
    seeThing: (draft, { payload: newThing }) => {
      draft.currentThing = newThing;
    },
    seeAllThings: (draft) => {
      draft.currentThing = null;
    },
    addThing: (draft, { payload: name }) => {
      draft.things.push({ id: uuid(), name, done: [] });
    },
    removeThing: (draft, { payload: id }) => {
      const index = draft.things.findIndex((thing) => thing.id === id);
      if (index !== -1) {
        draft.things.splice(index, 1);
        if (id === draft.currentThing) {
          draft.currentThing = null;
        }
      }
    },
    doThing: (draft, { payload: id }) => {
      const thing = draft.things.find((thing) => thing.id === id);
      thing!.done.push(Date.now());
    },
    undoThing: (draft, { payload: { id, index } }) => {
      const thing = draft.things.find((thing) => thing.id === id);
      thing!.done.splice(index, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    things: thingsSlice.reducer,
  },
});

export const thingsActions = thingsSlice.actions;

export type RootState = ReturnType<typeof store.getState>
