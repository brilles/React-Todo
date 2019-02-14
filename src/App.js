import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        },
        {
          task: "Wash Car",
          id: 1528817084390,
          completed: false
        }
      ],
      task: "",
      id: "",
      completed: ""
    };
  }

  addTodo = e => {
    //prevents browser from refreshing
    e.preventDefault();
    // console.log(e.target);

    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: "",
      id: "",
      completed: ""
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>

        <div className="todo-list">
          {this.state.todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </div>

        <TodoForm
          addTodo={this.addTodo}
          task={this.state.task}
          handleChanges={this.handleChanges}
          id={this.state.id}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default App;
