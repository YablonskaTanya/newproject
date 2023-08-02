import React, { Component } from "react";
import ToDo from "../ToDo/ToDo";
import todo from "../../todo.json";
import FormTodo from "../FormTodo/FormTodo";
import { nanoid } from "nanoid";

const KEY_LOCALSTORAGE = "todo";

class ToDoList extends Component {
  state = {
    todoList: todo,
    isDelete: false,
    isCreate: false,
  };
  componentDidMount() {
    localStorage.getItem(KEY_LOCALSTORAGE, JSON.stringify(todo));
    this.setState({
      todoList: JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList.length < this.state.todoList.length) {
      localStorage.setItem(
        KEY_LOCALSTORAGE,
        JSON.stringify(this.state.todoList)
      );
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
      console.log("To-do create successfully!");
    }

    if (prevState.todoList.length > this.state.todoList.length) {
      localStorage.setItem(
        KEY_LOCALSTORAGE,
        JSON.stringify(this.state.todoList)
      );
      this.setState({ isCreate: true });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
      console.log("To-do delete successfully!");
    }
  }

  handleCheckCompleted = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== id),
    }));
  };

  addToDo = (value) => {
    this.setState((prevState) => {
      return {
        todoList: [
          ...this.state.todoList,
          {
            id: nanoid(),
            title: value,
            completed: false,
          },
        ],
      };
    });
  };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        {this.state.isDelete && (
          <div className="alert alert-success" role="alert">
            To-do create successfully!
          </div>
        )}
        {this.state.isCreate && (
          <div className="alert alert-danger" role="alert">
            To-do delete successfully!
          </div>
        )}
        <FormTodo addToDo={this.addToDo} />

        {this.state.todoList && (
          <ul className="list-group list-group-flush">
            {this.state.todoList.map((todo) => (
              <ToDo
                key={todo.id}
                todo={todo}
                handleCheckCompleted={this.handleCheckCompleted}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ToDoList;
