import {
  BiSolidUpArrowAlt as Up,
  BiSolidDownArrowAlt as Down,
  BiSolidArrowToTop as First,
  BiSolidArrowToBottom as Last,
} from "react-icons/bi";
import { ActionType, Song } from "./types";
import { memo } from "react";

interface PlayListItemProps {
  index: number;
  song: Song;
  move: (type: ActionType, index: number) => void;
}

type ButtonType = "up" | "down" | "first" | "last";

export const PlayListItem = memo(function PlayListItem({
  index,
  song,
  move,
}: PlayListItemProps) {
  const onClick = (type: ButtonType) => () => {
    move(type, index);
  };

  return (
    <li>
      <span>{index}</span>
      <p>
        <strong>{song.title}</strong> by <em>{song.artist}</em>
      </p>
      <button onClick={onClick("up")}>
        <Up />
      </button>
      <button onClick={onClick("down")}>
        <Down />
      </button>
      <button onClick={onClick("first")}>
        <First />
      </button>
      <button onClick={onClick("last")}>
        <Last />
      </button>
    </li>
  );
});
