import { nanoid } from "nanoid";
import { useState } from "react";

import ContentInfo from "./ContentInfo/ContentInfo";
// import Counter from "./Counter/Counter";
import FormLogin from "./FormLogin/FormLogin";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import Search from "./Search/Search";
import ToDoList from "./ToDoList/ToDoList";
// import { Alert } from "./Alert";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser :>> ", newUser);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <>
      <Header showModal={showModal} />
      {/* <Counter /> */}
      {isShowModal && (
        <Modal closeModal={closeModal}>
          {/* <Counter /> */}
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
      <ToDoList />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     isShowModal: false,
//     searchText: "",
//   };

//   showModal = () => {
//     this.setState({ isShowModal: true });
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };

//   createUser = (data) => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//     };
//     console.log("newUser :>> ", newUser);
//   };

//   handleSearch = (searchText) => {
//     this.setState({ searchText });
//   };

//   render() {
//     return (
//       <>
//         <Header showModal={this.showModal} />
//         {/* <Counter />; */}
//         {this.state.isShowModal && (
//           <Modal closeModal={this.closeModal}>
//             {/* <Counter /> */}
//             <FormLogin
//               createUser={this.createUser}
//               closeModal={this.closeModal}
//             />
//           </Modal>
//         )}
//         {/* <ToDoList /> */}
//         <Search handleSearch={this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
//       </>
//     );
//   }
// }

// export default App;
