import { Banana } from "./types";

interface Props {
  item: Banana;
  id: number;
}

export function BananaRender({ item, id }: Props) {
  return (
    <div className=" border flex py-2">
      <span>#{id}</span>
      <h2>{item.isFresh ? '🍌' : '💩'}</h2>
    </div>
  );
}
