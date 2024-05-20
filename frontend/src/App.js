import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodos } from './createTodos';
import { TodoList } from './todoList';

function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,  
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo(id, complete){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, complete}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <div className="app-title">
            <h2>To-do app</h2>
            <i className="fa-solid fa-book-bookmark"></i>
          </div>
          <CreateTodos onSubmit={addTodo}/>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </>
  );
}

export default App;
