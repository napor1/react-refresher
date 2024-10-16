import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useThing } from "../data/useThing";
import style from "./style.module.scss";

interface Props {
  id: string;
}
export function ThingItem({ id }: Props) {
  const { thing, seeThing, doThing, undoLastThing } = useThing(id);

  const doneCount = thing?.done.length;

  return (
    <Card style={{ width: "80%" }}>
      <CardHeader className={style.thingCardHeader}>
        <h3>{thing?.name}</h3>
        <span>[{doneCount}/100]</span>
        <Button className="ml-auto" size="xs" onClick={seeThing}>
          Detail
        </Button>
      </CardHeader>
      <CardContent className="flex items-center">
        <Progress value={doneCount} />
        <Button
          variant="outline"
          size="xs"
          className=" ml-1"
          onClick={undoLastThing}
        >
          <AiOutlineMinus />
        </Button>
        <Button variant="outline" size="xs" className=" ml-1" onClick={doThing}>
          <AiOutlinePlus />
        </Button>
      </CardContent>
    </Card>
  );
}
