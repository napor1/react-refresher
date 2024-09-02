import { ChangeEvent, useCallback, useState } from "react";

interface ITask {
  completed: boolean;
  task: string;
}

export function LongTaskManager() {
  const [newTask, setNewTask] = useState<string>("");
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

  // useCallback
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

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onSubmit = () => {
    addNewTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleTaskChange} />
      <button onClick={onSubmit}>Add</button>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toogleTaskCompletion(index)}
              />
              <span>{item.task}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
