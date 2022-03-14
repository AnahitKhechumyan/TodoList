import React from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';

function TodoItem({todo, onChange, onDelete}){

    return(
        <div className = "todoAppLabel">
            <label>
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 {todo.text}
                 <button  className="editButton" onClick={()=>{
                    // onEdit(todo);
                    }}><FontAwesomeIcon icon={faPen}/></button>
                <button  className="deleteButton" onClick={()=>{
                    onDelete(todo);
                    }}><FontAwesomeIcon icon={faTrash}/></button>
             </label>
        </div>
    )
}
export default TodoItem;