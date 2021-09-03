import { useState } from "react";
const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="formTopo">
      <>
        <input
          className="input"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button className="bntInput" onClick={() => addTodo(userInput)}>
          Listar
        </button>
      </>
    </div>
  );
};

export default Form;
