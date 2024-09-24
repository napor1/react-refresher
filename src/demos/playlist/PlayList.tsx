import { useCallback } from "react";
import { PlayListItem } from "./PlayListItem";
import { ActionType, Song } from "./types";
import { useReorderable } from "./useReorderable";

interface PlayListProps {
  songs: Song[];
}
export function PlayList({ songs }: PlayListProps) {
  const [list, dispatch] = useReorderable(songs);

  const handleMove = useCallback(
    (type: ActionType, index: number) => {
      dispatch({ type, index });
    },
    [dispatch]
  );
  return (
    <ol>
      {list.map((song, index) => (
        <PlayListItem
          key={song.id}
          index={index}
          song={song}
          move={handleMove}
        />
      ))}
    </ol>
  );
}
