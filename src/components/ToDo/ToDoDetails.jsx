import React, { Suspense, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCustomContext } from "../../Context/Context";
import { KEY_LOCALSTORAGE } from "../ToDoList/ToDoList";
import ToDo from "./ToDo";

const ToDoDetails = () => {
  const params = useParams();
  const { todoList, setTodoList } = useCustomContext();
  // console.log("params :>> ", params);
  const location = useLocation();
  console.log("location :>> ", location);

  useEffect(() => {
    const localTodo = localStorage.getItem(KEY_LOCALSTORAGE);
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, [setTodoList]);

  return (
    <Suspense>
      <Link
        to={location.state}
        className="btn active m-2"
        // data-bs-toggle="button"
        aria-pressed="true"
      >
        «– Back
      </Link>
      {todoList?.map(
        (todo) => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
      )}
    </Suspense>
  );
};

export default ToDoDetails;
