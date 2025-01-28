import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <main>
      <h2 className="text-center my-5">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </main>
  );
};

export default Todos;