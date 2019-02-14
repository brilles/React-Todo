import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoArr.map(todo => (
        <Todo key={todo.id} todo={todo} toggletodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
