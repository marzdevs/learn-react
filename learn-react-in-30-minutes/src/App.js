import React, { useState } from "react";
import TodoList from "./TodoList";
function App() {
  // when render it will give empty todo list, todos = every single todo and setTodos is function
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    // return to do list jsx html
    <>
    <TodoList todoList={todos}/> 
    <input type="text" />
    <button> Add Todo</button>
    <button> Clear Complete</button>
    <div>0 left to do</div>

    </>
  )
}

export default App;
