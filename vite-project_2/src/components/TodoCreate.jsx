import { useState } from "react";

const TodoCreated = ({ createTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmitAddTodo = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  }

    return (
        <form onSubmit={handleSubmitAddTodo} className="flex items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4">
          <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
      </form>
    );
};

export default TodoCreated;