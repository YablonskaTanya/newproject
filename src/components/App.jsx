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

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <>
        <Header showModal={this.showModal} />
        {/* <Counter />; */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            {/* <Counter /> */}
            <FormLogin />
          </Modal>
        )}
        <ToDoList />
      </>
    );
  }
}

export default App;
