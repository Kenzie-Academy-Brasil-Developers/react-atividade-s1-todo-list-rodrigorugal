const TodoList = ({ todos, handleTodo }) => {
  return (
    <>
      <div className="listaPai">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="bntLista"
                onClick={() => handleTodo(todo, index)}
              >
                Concluído
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
