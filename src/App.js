import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //todoData is an array full of todo(s).
      todoArr: [
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
      ]
    };
  }

  addtodo = (e, todo) => {
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
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    this.setState({
      todoArr: this.state.todoArr.filter(todo => !todo.completed)
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
          <button onClick={this.clearCompletedTodos}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
