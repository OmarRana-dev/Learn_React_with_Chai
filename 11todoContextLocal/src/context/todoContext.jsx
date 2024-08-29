import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: uuidv4(), ...todo }, ...prev]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, todo } : t))
    );
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));

    // if data is already available in local storage then set it to todos
    if (data && data.length > 0) {
      setTodos(data);
      console.log("hi setTodos");
    }

    // if data is already not available then fetch data from API and set it to todos
    if (!data) {
      console.log("fetching todos...");
      fetch("https://dummyjson.com/todos/random/6")
        .then((response) => response.json())
        .then((todos) => setTodos(todos))
        .catch((error) => {
          console.error("Failed to fetch todos:", error);
        });
    }
  }, []);

  // if we done something to the todos then set it to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("hi useEffect");
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
