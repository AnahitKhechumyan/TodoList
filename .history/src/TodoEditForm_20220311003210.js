import React, {useState} from "react";
//import './TodoForm.css';

function TodoEditForm(){
    const [text, setText] = useState(""); 
      
    return (
         
        <form  className="todoAppForm"  onSubmit ={(e)=>{
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="todoInput" type="text" value={text} onChange= {(e)=>{
       setText(e.target.value);
            }}/>
            <button className="todoAppAddButton">+</button>
        </form>
    )
}
export default TodoEditForm;
 