import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url(./assets/IMG/bg-mobile-light.jpg)] 
    bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className='text-3xl font-semibold uppercase tracking-[0.3em] text-white'>
            Todo
          </h1>
          <button> <MoonIcon className="fill-red-400"/> </button>
        </div>
        <form className="flex items-center gap-4 overflow-hidden rounded-b-md bg-white rounded-md  py-4 px-4 mt-8">
          <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">
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


          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex justify-center rounded-md bg-white p-4 gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
        
      </section>

      <section className="container mx-auto p-4 mt-8 flex justify-center">
        <p>Drag and Drop</p>
      </section>
    </div>
  )
}
