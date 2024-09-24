import { Reducer, useReducer } from "react";
import { Action } from "./types";

type State<T> = T[];

function mutableReducer<T>(state: State<T>, action: Action): State<T> {
  const newState: T[] = [...state];

  switch (action.type) {
    case "up": {
      if (action.index <= 0 || action.index >= newState.length) {
        return state;
      }
      [newState[action.index - 1], newState[action.index]] = [
        newState[action.index],
        newState[action.index - 1],
      ];
      return newState;
    }
    case "down": {
      if (action.index < 0 || action.index >= newState.length - 1) {
        return state;
      }
      [newState[action.index], newState[action.index + 1]] = [
        newState[action.index + 1],
        newState[action.index],
      ];
      return newState;
    }
    case "first": {
      const itemToTop = newState.splice(action.index, 1)[0];
      newState.unshift(itemToTop);
      return newState;
    }
    case "last": {
      const itemToBottom = newState.splice(action.index, 1)[0];
      newState.push(itemToBottom)
      return newState;
    }
    default: {
      return state;
    }
  }
}

export function useReorderable<T>(initial: State<T>) {
  return useReducer<Reducer<State<T>, Action>>(mutableReducer, initial);
}
