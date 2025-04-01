const TodoCreated = () => {
    return (
        <form className="flex items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4">
        <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
        <input 
          type="text" 
          placeholder="Create a new todo..." 
          className="w-full text-gray-400 outline-none"
        />
      </form>
    );
};

export default TodoCreated;