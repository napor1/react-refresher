import { useEffect, useState } from "react";
import { PlayList } from "./PlayList";
import "./index.css";
import { Song } from "./types";

const MY_COOL_PLAYLIST = [
  { id: 1, title: "Rock You Like a Hurricane", artist: "Scorpions" },
  { id: 2, title: "Paint It Black", artist: "The Rolling Stones" },
  { id: 3, title: "Enter Sandman", artist: "Metallica" },
  { id: 4, title: "Thunderstruck", artist: "AC/DC" },
  { id: 5, title: "Crazy Train", artist: "Ozzy Osbourne" },
  { id: 6, title: "Back in Black", artist: "AC/DC" },
  { id: 7, title: "Paranoid", artist: "Black Sabbath" },
  { id: 8, title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { id: 9, title: "Another One Bites the Dust", artist: "Queen" },
  { id: 10, title: "Seven Nation Army", artist: "The White Stripes" },
];

export default function Page() {
  const [list, setList] = useState<Song[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setList(MY_COOL_PLAYLIST);
    }, 1000);
  }, []);

  return <PlayList songs={list} />;
}
