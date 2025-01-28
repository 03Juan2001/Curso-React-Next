import { useState } from "react";
import  Formulario  from "./components/Formulario";
import Cats from "./components/cats";

const initialStatetodos = [
  {
    id: 1,
    title: 'Todo #01',
    description: 'Descrpcion #01',
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: 'Todo #01',
    description: 'Descrpcion #01',
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: 'Todo #01',
    description: 'Descrpcion #01',
    state: false,
    priority: true,
  },
]

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <h1>Formularios </h1>
        <Formulario />
    </div>
  )
}

export default App;