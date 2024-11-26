import { useState } from "react";
import "./todoList.scss";

const listData = new Array(5).fill(null).map((_, index) => ({
  content: `Content ${index + 1}`,
}));

export default function Page() {
  const [list, setList] = useState(listData);

  const deleteItem = (index: number) => {
    setList((list) => list.filter((_, itemIndex) => index !== itemIndex));
  };

  const addItem = () => {
    setList((list) => {
      return [
        ...list,
        {
          content: "New Content",
        },
      ];
    });
  };

  return (
    <div className="list-wrapper">
      <button onClick={addItem}>➕</button>
      {list.map((item, index) => (
        <div key={index} className="list-item">
          <span>{item.content}</span>
          <button onClick={() => deleteItem(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}
