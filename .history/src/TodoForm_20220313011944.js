import { PropaneSharp } from "@mui/icons-material";
import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = e =>{
      setText(e.target.value);
  };

  const handleSubmit = e =>{
    e.preventDefault();
       // props.onSubmit({
      // id:Math.floor(Math.random()*10000),
      //  text: text
   // });
    setText("");
  };
  return (
    <form
      className="todoAppForm"
      onSubmit={handleSubmit
          //(e) => {
        //e.preventDefault();
      //  onAdd(text);
        //setText("");}
      }
    >
      <input
        placeholder="Add a todo"
        className="todoInput"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button className="todoAppAddButton">+</button>
    </form>
  );
}
export default TodoForm;
