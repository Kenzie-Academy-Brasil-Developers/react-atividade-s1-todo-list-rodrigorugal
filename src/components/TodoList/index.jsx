const TodoList = ({ todos, handleTodo }) => {
  return (
    <div className="listaPai">
      <div>
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
    </div>
  );
};

export default TodoList;
