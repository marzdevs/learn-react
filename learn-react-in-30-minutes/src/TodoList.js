import React from 'react'
import Todo from './Todo'
// use rfc to make a function component using extension es7
export default function TodoList({todoList}) {
  return (
    todoList.map(todo => {
        return <Todo key ={todo.id} todo={todo} />
    })
  )
}
