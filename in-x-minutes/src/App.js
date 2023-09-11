import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4' // generates a radnom id

function App() {
  // when render it will give empty todo list, todos = every single todo and setTodos is function
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  function handleAddTodo(e){
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: 1, name: name, complete: false}]
      })
      todoNameRef.current.value = null // will clear input after adding to todolist
  }
  return (
    // return to do list jsx html
    <>
    <TodoList todoList={todos}/> 
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}> Add Todo</button>
    <button> Clear Complete</button>
    <div>0 left to do</div>

    </>
  )
}

export default App;
