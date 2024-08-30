import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todo: "invest in stoks", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: nanoid(), todo: action.payload };
      state.todos.push(newTask);
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(
        (task) => task.id !== action.payload
      );
    },
    updateTask: (state, action) => {
      const updatedTask = state.todos.find(
        (task) => task.id === action.payload.id
      );
      if (updatedTask) {
        updatedTask.todo = action.payload.todo;
      }
    },
    completeTask: (state, action) => {
      const updatedTask = state.todos.find(
        (t) => t.id === action.payload.id
      );

      if (updatedTask) {
        updatedTask.completed = !updatedTask.completed;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
