import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
    return (
        <div className="mt-8 bg-white rounded-t-md [&>article]:p-4 ">
          <article className="flex gap-4 border-b border-b-gray-300">  
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none"> <CrossIcon/> </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">  
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none"> <CrossIcon/> </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">  
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600 ">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none"> <CrossIcon/> </button>
          </article> 
        </div>
    );
};  
export default TodoList;