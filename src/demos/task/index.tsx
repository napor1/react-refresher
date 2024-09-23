import { CompactTaskManager } from "./CompactTaskManager";
import { LongTaskManager } from "./LongTaskManager";
import "./style.css";

export default function Page() {
  return (
    <div className="demo-task-wrapper">
      <LongTaskManager></LongTaskManager>
      <CompactTaskManager></CompactTaskManager>
    </div>
  );
}
