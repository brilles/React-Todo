import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChanges}
        placeholder="...todo"
      />
      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
