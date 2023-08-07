import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ToDoPage from "./pages/ToDoPage";
import Layout from "./Layout/Layout";
import ToDoDetails from "./ToDo/ToDoDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="todo" element={<ToDoPage />} />

          <Route path="todo/:id" element={<ToDoDetails />} />
        </Route>
        {/* <Route path="/login" element={<FormLogin />} /> */}
      </Routes>
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
