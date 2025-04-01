import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreated from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url(./assets/IMG/bg-mobile-light.jpg)] 
    bg-contain bg-no-repeat">
      
      <Header />
      
      <main className="container mx-auto px-4 mt-8">
        <TodoCreated />

        <TodoList />

        <TodoComputed />

        <TodoFilter />
        
      </main>

      <footer className="container mx-auto p-4 mt-8 flex justify-center">Drag and Drop</footer> 
    </div>
  )
}
