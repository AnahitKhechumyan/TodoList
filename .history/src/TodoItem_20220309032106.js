import React,{useState} from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({todo, onChange,onEdit, onDelete}){
    const [text, setText] = useState("");
    function handleChange(todo) {
        setText(text.target.value);
      }
    return(
        <div className = "todoAppLabel">
            <label>
                <div className="text">
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 {todo.text}
                 </div>
                 <div className="icon"> 
                 <button  className="editButton" onClick={()=>{
                    onEdit( handleChange(todo.text));
                    }}><FontAwesomeIcon icon={faPen} className="pen"/></button>
                <button  className="deleteButton" onClick={()=>{
                    onDelete(todo);
                    }}><FontAwesomeIcon icon={faTrash}/></button>
                    </div>
             </label>
        </div>
    )
}
export default TodoItem;