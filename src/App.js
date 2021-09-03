import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const handleTodo = (itemRemove) => {
    const newTodo = todos.filter((item) => item !== itemRemove);
    setTodos(newTodo);
  };

  return (
    <div className="telaCheia">
      <div className="caixaPai">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo}></TodoList>
      </div>
    </div>
  );
}

export default App;
