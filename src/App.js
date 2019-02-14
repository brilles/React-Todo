import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

// todoArr is an array full of todo(s).
const todoArr = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArr // same as todoArr: todoArr
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoArr: [...this.state.todoArr, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todoArr: this.state.todoArr.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed //overrides completed value bc last
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoArr: this.state.todoArr.filter(todo => !todo.completed) //if opposite of todo.completed is true then keep it
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List:</h1>
        </div>

        <TodoList todoArr={this.state.todoArr} toggleTodo={this.toggleTodo} />

        <div className="buttons">
          <TodoForm addTodo={this.addTodo} />
          <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
