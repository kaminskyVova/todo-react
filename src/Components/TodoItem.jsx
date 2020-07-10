import React from "react";

export default function TodoItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <label>
        <input 
          type="checkbox" 
          className="mr-3" 
          checked={props.todo.selected} 
          onChange={e => props.toggleTodo(props.todo.id)} 
        />
        <span className={props.todo.done ? "item-done" : ""}>{props.todo.content}</span>
      </label>
      <small className="text-muted">12.04.2020</small>
    </li>
  )
}
