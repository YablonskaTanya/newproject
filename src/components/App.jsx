import { nanoid } from "nanoid";
import React, { Component } from "react";
// import Counter from "./Counter/Counter";
import FormLogin from "./FormLogin/FormLogin";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
// import { Alert } from "./Alert";

class App extends Component {
  state = {
    isShowModal: false,
  };

  componentDidMount() {
    console.log("mount APP");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate APP");
  }

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  render() {
    return (
      <>
        <Header showModal={this.showModal} />
        {/* <Counter />; */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            {/* <Counter /> */}
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        <ToDoList />
      </>
    );
  }
}

export default App;
