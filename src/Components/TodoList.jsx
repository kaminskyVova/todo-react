import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {

  const todoitems = props.todos.map(todo => (
    <TodoItem todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
  ))

  return (
    <ul className="list-group">
        { todoitems }
    </ul>
  )
}
