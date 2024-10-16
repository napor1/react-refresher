import { Button } from "@/components/ui/button";
import { useAddThing } from "../data";

export function AddAThing() {
  const addThing = useAddThing();
  const onAdd = () => {
    addThing("🍉🍉🍉");
  };

  return <Button onClick={onAdd}>Add</Button>;
}
