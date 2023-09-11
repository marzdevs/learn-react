import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuid from 'uuid' // generates a radnom id

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  // when render it will give empty todo list, todos = every single todo and setTodos is function
  const [todosList, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  // saves local  
  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todosList))
  }, [todosList])
  
  function toggleTodo(id){
    const newTodos = [...todosList]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = ! todo.complete
    setTodos(newTodos)
  }
  function handleAddTodo(e){
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: 1, name: name, complete: false}]
      })
      todoNameRef.current.value = null // will clear input after adding to todolist
  }

  function handleClearTodos(){
    const newTodos = todosList.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    // return to do list jsx html
    <>
    <TodoList todoList={todosList} toggleTodo={toggleTodo}/> 
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}> Add Todo</button>
    <button onClick={handleClearTodos}> Clear Complete</button>
    <div>{todosList.filter(todo => !todo.complete).length} left to do</div>

    </>
  )
}

export default App;
