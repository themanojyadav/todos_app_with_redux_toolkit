import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todosList: [],
  editTodo: false,
  editTodoDetails: {},
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todosList.push(action.payload);
      state.editTodo = false;
      state.editTodoDetails = {};
    },
    editTodo(state, action) {
      state.editTodo = true;
      state.editTodoDetails = action.payload.todo;
    },
    updateTodo(state, action) {
      // Get the todo from state using id
      let todo = state.todosList.find((todo) => todo.id === action.payload.id);
      // Update the todo details
      todo.title = action.payload.todo.title;
      todo.description = action.payload.todo.description;

      // Set the edit state to false
      state.editTodo = false;
      state.editTodoDetails = {};
    },
    deleteTodo(state, action) {
      let filteredList = state.todosList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todosList = filteredList;
    },
  },
});

export const { addTodo, editTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
