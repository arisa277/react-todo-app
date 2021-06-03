import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");


  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
          id: Math.floor(Math.random() * 1000),
          text: input
      });
      setInput('')
  }

  return (
    <div className="todo-form-wrapper">
    <h2>What's your plan for today?</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
