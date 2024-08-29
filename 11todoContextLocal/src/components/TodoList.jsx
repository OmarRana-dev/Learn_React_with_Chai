import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItems";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No todo available</p>
      )}
    </>
  );
}
