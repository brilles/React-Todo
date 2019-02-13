import React from "react";

const Todo = props => {
  return (
    <div className="task-card">
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
