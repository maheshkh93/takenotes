import React from "react";
import "./styles.css";

const InputField = ({ todo, setTodo, addTask }) => {
  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTask(e);
      }}
    >
      <input
        type="text"
        placeholder="Type your note"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        +
      </button>
    </form>
  );
};

export default InputField;
