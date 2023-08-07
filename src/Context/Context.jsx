import React, { useContext, useState } from "react";

const ContextInfo = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextInfo);
};

const Context = ({ children }) => {
  const [news, setNews] = useState(null);
  const [todoList, setTodoList] = useState(null);

  return (
    <ContextInfo.Provider
      value={{
        news: news,
        setNews: setNews,
        todoList: todoList,
        setTodoList: setTodoList,
      }}
    >
      {children}
    </ContextInfo.Provider>
  );
};

export default Context;
