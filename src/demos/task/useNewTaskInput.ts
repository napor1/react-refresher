import { ChangeEvent, useState } from "react";

interface IParams {
  addNewTask: (task: string) => void;
}

export function useNewTaskInput({ addNewTask }: IParams) {
  const [newTask, setNewTask] = useState<string>("");


  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onSubmit = () => {
    addNewTask(newTask);
    setNewTask("");
  };

  return [newTask, handleTaskChange, onSubmit] as const
}
