import React, {useState} from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';
//import TodoList from "./TodoList";

function TodoItem({todos, onChange,onEdit, onDelete}){
    const[edit, setEdit] = useState({
        id: null,
        value:""
    })
    return  todos.map((todo,index)=>(
        <div className = "todoAppLabel">
            <label>
                <div className={todo.isComplete?'todo-row complete':'todo-row'} key={index}>
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 {todo.text}
                 </div>
                 <div className="icon"> 
                 <button  className="editButton" onClick={()=>
                     // onEdit(todo);
                     setEdit({id:todo.id, value:todo.text})}
                     >
                    <FontAwesomeIcon icon={faPen} className="pen"/></button>
                    <button  className="deleteButton" onClick={()=>{
                    onDelete(todo.id);
                    }}
                    >
                    <FontAwesomeIcon icon={faTrash}/></button>
                    </div>
             </label>
        </div>
))
}
export default TodoItem;