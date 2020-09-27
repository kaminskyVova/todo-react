import React from "react";
import AppHeader from "./Components/AppHeader";
import TodoList from "./Components/TodoList";
// import './index.css';
import { getAll, createTodo } from './requestManager';




function App () {
  const [todos, setTodos] = React.useState([])
  

  React.useEffect(
    () => getAll().then(todos => setTodos(todos)),
    []
  )


  const [newTodo, setNewTodo] = React.useState("")

  const [showActions, setShowActions] = React.useState(false)
  React.useEffect(
    () => {
      setShowActions(todos.some(todo => todo.selected || todo.done))
    },
    [todos]
  )

  const toggleTodo = todoId => {
    const todo = todos.find(todo => todo.id === todoId)
    todo.selected = !todo.selected

    setTodos([...todos])
  }

  const setDone = () => {
    for (const todo of todos) {
      if (todo.selected) {
        todo.done = true
        todo.selected = false
      }
    }

    setTodos([...todos])
  }

  const removeSelected = () => {
    setTodos(todos.filter(todo => !todo.selected))
  }

  const handlerNewTodo = e => {
    const btn = document.querySelector(".btn-add")
    const input = document.querySelector(".form-control")
    if (e.target === btn && input.value !== "") {
      const todo = {
        // id: 1 + Math.max(0, ...todos.map(todo => todo.id)),
        done: false,
        content: newTodo,
        selected: false
      }
      
      setTodos([todo, ...todos])

      createTodo(todo).then(todo => setTodos([todo, ...todos]))
      
      setNewTodo("")
      
    }
    else {
      setNewTodo(e.target.value)
    }
  }

  return (
    <div className="py-1 application container d-flex flex-column align-items-stretch">
      <div className="card h-100">
        <AppHeader />

        <input 
        type="text" 
        placeholder="Enter what to do ( and select check to see all buttons)"
        className="form-control"
        value={newTodo}
        onChange={handlerNewTodo}
        />

        <div className="ml-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-add"  onClick={handlerNewTodo}>ADD</button>

              {
                showActions ?
                (<div>
                  <button type="button" className="btn btn-primary" onClick={setDone}>
                  DONE
                </button>
                <button type="button" className="btn btn-danger" onClick={removeSelected}>
                  DELETE
                </button></div>
                ) : ""
              }

            </div>
        </div>
        
        <div className="overflow-auto">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </div>
  )
}

export default App;
