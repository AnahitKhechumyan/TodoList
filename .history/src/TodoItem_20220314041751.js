import React, {useState} from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({todo,todos,onChange, onEdit, onDelete, onSave}){
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");   
     
    return  ( 
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
                    {/*<div>
                      <input   value={value} onChange={(e)=>setValue(e.target.value)}/>
                    
                      <button onClick = {()=>onSave(todo)}>Save</button> 
                    </div>*/}
                       
                    <button  className="editButton" onClick={()=>
                    onEdit(todo)}
                     >
                    <FontAwesomeIcon icon={faPen} className="pen"/>
                    </button>
                    <button  className="deleteButton" onClick={()=>
                    onDelete(todo)}
                    >
                    <FontAwesomeIcon icon={faTrash}/>
                    </button>
                     
    
                  </div>
                  </label>
                
            </div>
             
    )         
}
export default TodoItem;