import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (e) => {
    e.preventDefault()
    updateTodo(edit.id, edit.text)

    setEdit({
      id : null,
      text: ""
    })
  };

  const handleChange = e => {
    setEdit({
      id: edit.id,
      text: e.target.value
    })
  }

  if (edit.id) {
    return (
      <form className="update-form" onSubmit={submitUpdate}>
        <input className="todo-row update-input" type="text" onChange={handleChange} />
        <button className="update-btn" type="submit">Update</button>
      </form>
    );
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        className="cursor"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, text: todo.text })}
          className="edit-icon"
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
