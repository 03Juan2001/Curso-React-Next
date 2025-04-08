import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreated from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
  { id: 3, title: "Todo 3", completed: false },
]

export default function App() {
  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const [filter, setFilter] = useState("all")

  const changeFilter = (filter) => { setFilter(filter) }

  const filteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-300 bg-[url(./assets/IMG/bg-mobile-light.jpg)] 
    bg-contain bg-no-repeat">
      
      <Header />
      
      <main className="container mx-auto px-4 mt-8">
        <TodoCreated 
          createTodo={createTodo} 
        />

        <TodoList 
          todos={filteredTodos()} 
          removeTodo={removeTodo} 
          updateTodo={updateTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft} 
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <footer className="container mx-auto p-4 mt-8 flex justify-center">
        Drag and Drop To Reorder List
      </footer> 
    </div>
  )
}
