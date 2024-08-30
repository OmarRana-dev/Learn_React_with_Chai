import React from "react";
import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

function App() {
  return (
    <>
      <div className="text-4xl font-bold">Manage Your Redux Todo</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
