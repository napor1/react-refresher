import { Button } from "@/components/ui/button";
import { useThing } from "../data/useThing";
import style from "./style.module.scss";

interface Props {
  id: string;
}

export function ThingDetail({ id }: Props) {
  const {
    thing,
    seeAllThings,
    doThing,
    removeThing,
    undoLastThing,
    undoThing,
  } = useThing(id);
  const A100 = Array.from(Array(100)).map((_, v) => v);
  const doneList = thing?.done || [];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <Button onClick={seeAllThings}>❮ Back</Button>
        <Button onClick={doThing}>➕ Do</Button>
        <h3>{thing!.name}</h3>
        <Button onClick={undoLastThing}>➖ Undo</Button>
        <Button onClick={removeThing}>Remove</Button>
      </div>
      {doneList.length}
      <div className={`${style.grid} mt-4`}>
        {A100.map((index) => ({
          index,
          done: index < doneList.length,
          time: doneList[index] && new Date(+doneList[index]),
        })).map(({ index, done, time }) => (
          <div
            className={style.gridCell}
            onClick={() => done && undoThing(index)}
            key={`${index}${done}`}
            style={{
              background: done ? "hotpink" : "tarnsparent",
            }}
          >
            <span className={style.time}>
              {(time as Date)?.toLocaleDateString?.()}
            </span>
            <span className={style.time}>
              {(time as Date)?.toLocaleTimeString?.()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
