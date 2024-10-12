import { useAddThing } from "../data"

export function AddAThing() {
  const addThing = useAddThing();
  
  const onAdd = () => {
    addThing('🐤🐤🐤')
  }
  return <>
  <button onClick={onAdd}>Add</button>
  </>
}