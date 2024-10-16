import { useAllThings } from "../data";
import { AddAThing } from "./AddAThing";
import style from "./style.module.scss";
import { ThingItem } from "./ThingItem";

export function AllThings() {
  const things = useAllThings();

  return (
    <div className={style.main}>
      <h1>All My Things</h1>
      <AddAThing />
      {things.map((id) => (
        <ThingItem id={id} key={id}></ThingItem>
      ))}
    </div>
  );
}
