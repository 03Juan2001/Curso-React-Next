import IconCross from "./icons/IconCross";
import Iconcheck from "./icons/Iconcheck";

const TodoItem = ({ todo, removeTodo, updateTodo}) => { 
    const { id, title, completed } = todo;
    
    return(
        <article className="flex gap-4 border-b border-b-gray-300">  
            <button 
                className={` h-5 w-5 flex-none rounded-full ${
                    completed 
                    ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
                    : "inline-block border-1"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <Iconcheck/> }
            </button>
            <p className={`grow text-gray-600  ${completed && "line-through"}`}> {title} </p>
            <button className="flex-none" onClick={() => removeTodo(id)}> <IconCross/> </button>
        </article>
    );
};

export default TodoItem;