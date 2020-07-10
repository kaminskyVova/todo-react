import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {

  const todoitems = props.todos.map(todo => (
    <TodoItem todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
  ))

  return (
    <ul className="list-group">
        { todoitems }
      {/* <TodoItem todo={props.todos[0]}/>
      <TodoItem todo={props.todos[1]}/>
      <TodoItem todo={props.todos[2]}/>
      <TodoItem todo={props.todos[3]}/>
      <TodoItem todo={props.todos[4]}/> */}
    </ul>
  )
}
