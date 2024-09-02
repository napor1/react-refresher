import { useCallback, useState } from "react";

interface ITask {
  completed: boolean;
  task: string;
}

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addNewTask = (task: string) => {
    const trimedTask = task.trim();
    if (trimedTask !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          completed: false,
          task: trimedTask,
        },
      ]);
    }
  };

  const toogleTaskCompletion = useCallback((index: number) => {
    setTasks((prevTasks) => {
      return prevTasks.map((item, subIndex) => {
        if (subIndex === index) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
    });
  }, []);

  return [tasks, addNewTask, toogleTaskCompletion] as const
}
