import { BananaRender } from "./BananaRender";
import { CatRender } from "./CatRender";
import { List } from "./List";
import { Banana, Cat } from "./types";

const catList: Cat[] = [
  {
    name: "cat1",
  },
  {
    name: "cat2",
  },
];

const bananaList: Banana[] = [
  { isFresh: true },
  { isFresh: false },
  { isFresh: true },
];
export default function Page() {
  return (
    <>
      <h1>CAT</h1>
      <List
        list={catList}
        Renderer={CatRender}
      ></List>
      <h1>BANANA</h1>
      <List
        list={bananaList}
        Renderer={BananaRender}
      ></List>
    </>
  );
}
