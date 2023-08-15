import ToDo from "../ToDo/ToDo";
import FormTodo from "../FormTodo/FormTodo";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FormFilterTodo from "../FormTodo/FormFilterTodo";
import { useSearchParams } from "react-router-dom";
import { createTodo } from "../../store/todo/actions";
import { useDispatch, useSelector } from "react-redux";

export const KEY_LOCAL_STORAGE = "todo";

const ToDoList = () => {
  // const [todoList, setTodoList] = useState("");

  const { todo: todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [filteredTodoList, setFilteredTodoList] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterText = searchParams.get("filter") ?? "";

  // useEffect(() => {
  //   const localTodo = localStorage.getItem(KEY_LOCAL_STORAGE);
  //   if (localTodo) setTodoList(JSON.parse(localTodo));
  // }, []);

  // useEffect(() => {
  //   todoList &&
  //     localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(todoList));
  // }, [todoList]);

  useEffect(() => {
    todoList &&
      setFilteredTodoList(
        todoList?.filter((todo) =>
          todo.title.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
  }, [filterText, searchParams, todoList]);

  const handleCheckCompleted = (id) => {
    // setTodoList((prevTodoList) => {
    //   return prevTodoList.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   );
    // });
  };

  const handleDelete = (id) => {
    // setTodoList((prevTodoList) => {
    //   return prevTodoList.filter((todo) => todo.id !== id);
    // });
    // toast.error("delete is successfully");
  };

  const addToDo = (value) => {
    // setTodoList((prevTodoList) => {
    //   return [
    //     ...prevTodoList,
    //     {
    //       id: nanoid(),
    //       title: value,
    //       completed: false,
    //     },
    //   ];
    // });
    dispatch(createTodo(value));
    toast.success("create is successfully");
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormFilterTodo
        setSearchParams={setSearchParams}
        filterText={filterText}
      />
      <FormTodo addToDo={addToDo} />
      {filteredTodoList && (
        <ul
          className="list-group list-group-flush"
          style={{
            gap: 5,
          }}
        >
          {filteredTodoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;

// class ToDoList extends Component {
//   state = {
//     todoList: todo,
//     isDelete: false,
//     isCreate: false,
//   };
//   componentDidMount() {
//     localStorage.getItem(KEY_LOCAL_STORAGE, JSON.stringify(todo));
// if(localStorage.getItem('todo'))
//     this.setState({
//       todoList: JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)),
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length < this.state.todoList.length) {
//       localStorage.setItem(
//         KEY_LOCAL_STORAGE,
//         JSON.stringify(this.state.todoList)
//       );
//       this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//       console.log("To-do create successfully!");
//     }

//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem(
//         KEY_LOCAL_STORAGE,
//         JSON.stringify(this.state.todoList)
//       );
//       this.setState({ isCreate: true });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 1500);
//       console.log("To-do delete successfully!");
//     }
//   }

//   handleCheckCompleted = (id) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   handleDelete = (id) => {
//     this.setState((prevState) => ({
//       todoList: prevState.todoList.filter((todo) => todo.id !== id),
//     }));
//   };

//   addToDo = (value) => {
//     this.setState((prevState) => {
//       return {
//         todoList: [
//           ...this.state.todoList,
//           {
//             id: nanoid(),
//             title: value,
//             completed: false,
//           },
//         ],
//       };
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>My To-Do list</h1>
//         {this.state.isDelete && (
//           <div className="alert alert-success" role="alert">
//             To-do create successfully!
//           </div>
//         )}
//         {this.state.isCreate && (
//           <div className="alert alert-danger" role="alert">
//             To-do delete successfully!
//           </div>
//         )}
//         <FormTodo addToDo={this.addToDo} />

//         {this.state.todoList && (
//           <ul className="list-group list-group-flush">
//             {this.state.todoList.map((todo) => (
//               <ToDo
//                 key={todo.id}
//                 todo={todo}
//                 handleCheckCompleted={this.handleCheckCompleted}
//                 handleDelete={this.handleDelete}
//               />
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

// export default ToDoList;
