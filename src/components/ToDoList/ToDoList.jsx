import ToDo from "../ToDo/ToDo";
import FormTodo from "../FormTodo/FormTodo";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const KEY_LOCALSTORAGE = "todo";

const ToDoList = () => {
  const [todoList, setTodoList] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isCreate, setIsCreste] = useState(false);

  useEffect(() => {
    const localTodo = localStorage.getItem(KEY_LOCALSTORAGE);
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    todoList &&
      localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prevTodolist) => {
      return prevTodolist.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = (id) => {
    setTodoList((prevTodolist) => {
      return prevTodolist.filter((todo) => todo.id !== id);
    });

    setIsDelete(true);
    setTimeout(() => {
      setIsDelete(false);
    }, 1500);
  };

  const addToDo = (value) => {
    setTodoList((prevTodolist) => {
      return [
        ...prevTodolist,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });

    setIsCreste(true);
    setTimeout(() => {
      setIsCreste(false);
    }, 1500);
  };

  return (
    <>
      <h1>My To-Do list</h1>
      {isCreate && (
        <div className="alert alert-success" role="alert">
          To-do create successfully!
        </div>
      )}
      {isDelete && (
        <div className="alert alert-danger" role="alert">
          To-do delete successfully!
        </div>
      )}
      <FormTodo addToDo={addToDo} />

      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
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
//     localStorage.getItem(KEY_LOCALSTORAGE, JSON.stringify(todo));
// if(localStorage.getItem('todo'))
//     this.setState({
//       todoList: JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)),
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length < this.state.todoList.length) {
//       localStorage.setItem(
//         KEY_LOCALSTORAGE,
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
//         KEY_LOCALSTORAGE,
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
