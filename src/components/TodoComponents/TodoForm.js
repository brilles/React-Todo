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

  addTodo = e => {
    this.setState({ item: "" });
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
