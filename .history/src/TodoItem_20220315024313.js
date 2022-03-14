import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

function TodoItem({
  todo,
  todos,
  setTodos,
  onChange,
  onDelete,
  //onEdit,
  //onAdd,
}) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const focusRef = useRef();

  function editTodo(id) {
    setEdit(id);
  }
  function saveTodo(id) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.text = value;
        }
        return item;
      })
    );
    setEdit(null);
  }
  useEffect(() => {
    if (focusRef.current) focusRef.current.focus();
  }, [edit]);

  return (
    <div key={todo.id} className="todoAppLabel">
      {edit === todo.id ? (
        <div>
          <input
            ref={focusRef}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />{" "}
        </div>
      ) : (
        <label className="text">
          <input
            className="check"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => {
              onChange({
                ...todo,
                isCompleted: e.target.checked,
              });
            }}
          />
          {todo.text}
        </label>
      )}
      {edit === todo.id ? (
        <div>
          <button
            onClick={() => {
              saveTodo(todo.id);
            }}
          >
            <FontAwesomeIcon icon={faPen} className="pen" />
          </button>
        </div>
      ) : (
        <div className="icon">
          <button className="editButton" onClick={() => editTodo(todo.id)}>
            <FontAwesomeIcon icon={faPen} className="pen" />
          </button>
          <button className="deleteButton" onClick={() => onDelete(todo)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
}
export default TodoItem;
