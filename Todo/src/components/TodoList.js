import React from "react";

const TodoList = (props) => {
  return (
    <div className="list">
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
