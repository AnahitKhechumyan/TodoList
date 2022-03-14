import React, {useEffect, useRef, useState} from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({todo,todos,setTodos,onChange, onDelete, onEdit, onAdd }){
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const focusRef = useRef();

    function editTodo(id){
        setEdit(id)
    }
    function saveTodo(id){
        setTodos(todos.map(item=>{
            if(item.id == id){
                item.text = value
            }
            return item;
        }))
        setEdit(null);
    }
    useEffect(()=>{
        console.log("its edit change", edit)
        console.log("ref", focusRef)
        if(focusRef.current) focusRef.current.focus();
    }, [edit]);
     
     
    return  ( 
        
        <div key={todo.id} className = "todoAppLabel">
            {(edit === todo.id) ? <div><input ref= {focusRef} type ="text" 
            value= {value} onChange={(e)=>{setValue(e.target.value)}}/> </div>:
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
                 </label>

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