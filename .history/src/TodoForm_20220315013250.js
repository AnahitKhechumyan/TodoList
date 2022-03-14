import React, { useState,useRef, useEffect } from "react";
import "./TodoForm.css";

function TodoForm({onAdd,todos, setTodos, newTodos}) {
  const [text, setText] = useState("");

   const ref = useRef(null);

   let searchText = "";
   let filteredTodos = "";
   useEffect(()=>{
     ref.current.addEventListener("keyup", (e)=>{
       let id = setTimeout(()=>{
         searchText = e.target.value.toLowerCase();
         if(!searchText){
           filteredTodos = todos;
         }else{
           filteredTodos = todos.filter(todo => {
             return todo.text.toLowerCase().indexOf(searchText) !== -1
           })
         }
         setTodos(filteredTodos)
        },3000)
        return ()=>clearInterval(id);
       })
     },[text]);
   
  return (
    <form
      className="todoAppForm"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
        setTodos(newTodos);
      }}
    >
      <input ref={ref}
        placeholder="Add a todo"
        className="todoInput"
        type="text"
        value={text}
        onChange={e =>{ 
         setText(e.target.value)}}
      />
      <button className="todoAppAddButton">+</button>
    </form>
  );
}
export default TodoForm;
