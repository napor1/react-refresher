import { useAllThings } from "../data";
import { AddAThing } from "./AddAThing";
import style from "./style.module.scss";

export function AllThings() {
  const things = useAllThings();

  return (
    <div className={style.main}>
      <h1>All My Things</h1>
      <AddAThing />
      {things.map((id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
}
