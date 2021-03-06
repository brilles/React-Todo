import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // clears input and adds Todo
  submitTodo = e => {
    this.setState({ todo: "" });
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.todo} // controls input
          name="todo"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
