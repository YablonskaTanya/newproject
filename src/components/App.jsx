import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import NewsPage from "./pages/NewsPage";
// import ToDoPage from "./pages/ToDoPage";
// import ToDoDetails from "./ToDo/ToDoDetails";

const NewsPage = lazy(() => import("./pages/NewsPage"));
const ToDoPage = lazy(() => import("./pages/ToDoPage"));
const ToDoDetails = lazy(() => import("./ToDo/ToDoDetails"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="todo" element={<ToDoPage />} />

          <Route path="todo/:id" element={<ToDoDetails />} />
          <Route
            path="/login"
            element={
              <Suspense>
                <LoginPage />
              </Suspense>
            }
          />
        </Route>
        {/* <Route
          path="/login"
          element={
            <Suspense>
              <LoginPage />
            </Suspense>
          }
        /> */}
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
