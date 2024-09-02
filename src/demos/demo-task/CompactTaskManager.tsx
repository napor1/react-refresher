import { useNewTaskInput } from "./useNewTaskInput";
import { useTasks } from "./useTasks";

export function CompactTaskManager() {
  const [tasks, addNewTask, toogleTaskCompletion] = useTasks();
  const [newTask, handleTaskChange, onSubmit] = useNewTaskInput({ addNewTask });

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
