import { createReducer } from "@reduxjs/toolkit";
import { todoInitialState } from "./initialState";
import { createTodo } from "./actions";

export const todoReducer = createReducer(todoInitialState, {
  // [createTodo]: (state, action) => state.todo.push(action.payload),

  [createTodo]: (state, action) => ({
    ...state,
    todo: [...state.todo, { ...action.payload }],
  }),
});

// import { CREATE_TODO } from "./types";

// export const todoReducer = (state = todoInitialState, action) => {
//   switch (action.type) {
//     case CREATE_TODO:
//       return {
//         ...state,
//         todo: [...state.todo, { ...action.payload }],
//       };

//     default:
//       return state;
//   }
// };

// ...state,
// todo: [...state.todo, { ...action.payload }],
