

export function getAll () {
  return fetch('/todoItems', {
    method: "GET"
  }).then(response => response.json())
}

export function getById (id) {
  return fetch('/todoItems/', +id, {
    method: "GET"
  }).then(response => response.json())
}

export function createTodo (todo) {
  return fetch('/todoItems', {
    method: "POST",
    headers: {
      'content-type': "application/json"
    },
    body: JSON.stringify(todo)

  }).then(response => response.json())
}