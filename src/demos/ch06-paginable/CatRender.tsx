import { Cat } from "./types";

interface Props {
  item: Cat;
  id: number;
}

export function CatRender({ item, id }: Props) {
  return (
    <div className="border flex py-2">
      <span>#{id}</span>
      <h2>{item.name}</h2>
    </div>
  );
}
