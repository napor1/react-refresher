import { FC } from "react";

interface Props<T> {
  list: T[];
  Renderer: FC<RendererProps<T>>;
}

interface RendererProps<T> {
  item: T;
  id: number;
}

export function List<T>({ list, Renderer }: Props<T>) {
  return (
    <div>
      {list.map((item, index) => (
        <Renderer key={index} item={item} id={index} />
      ))}
    </div>
  );
}
