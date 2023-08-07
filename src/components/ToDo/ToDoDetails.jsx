import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "../../Context/Context";
import { KEY_LOCALSTORAGE } from "../ToDoList/ToDoList";
import ToDo from "./ToDo";

const ToDoDetails = () => {
  const params = useParams();
  const { todoList, setTodoList } = useCustomContext();
  console.log("params :>> ", params);

  useEffect(() => {
    const localTodo = localStorage.getItem(KEY_LOCALSTORAGE);
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, [setTodoList]);

  return (
    <>
      {todoList?.map(
        (todo) => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
      )}
    </>
  );
};

export default ToDoDetails;
