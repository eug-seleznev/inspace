import React from 'react'
import { useLocalObservable, useObserver } from 'mobx-react' // 6.x

 const SmartTodo = ({children}) => {
  const todo = useLocalObservable(() => ({
    title: 'Click to toggle',
    done: false,
    toggle() {
      todo.done = !todo.done
    },
    get emoji() {
      return todo.done ? '😜' : '🏃'
    },
  }))

  return useObserver(() => (
    {children}
  ))
}



export default SmartTodo