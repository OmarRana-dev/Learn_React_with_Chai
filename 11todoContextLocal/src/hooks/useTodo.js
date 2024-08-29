import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export default function useTodo() {
  return useContext(TodoContext);
}
