//reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {
    //state action
    addTodo: (state, action) => {
      const newTodo = {
        id: 123,
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation ...
    },
    deleteTodo: (state, action) => {
      //action .paylad
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;