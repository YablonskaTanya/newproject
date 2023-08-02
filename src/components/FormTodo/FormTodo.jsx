import { Component } from "react";

class FormTodo extends Component {
  state = { todo: "" };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Create to-do
          </label>
          <input
            type="text"
            name="todo"
            className="form-control"
            id="exampleInput"
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </div>

        <button
          //   disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          ADD to-do
        </button>
      </form>
    );
  }
}

export default FormTodo;
