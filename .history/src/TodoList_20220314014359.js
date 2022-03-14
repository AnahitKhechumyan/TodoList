import React from "react";
import  TodoItem from "./TodoItem";
 

function TodoList({todos, onDelete,onChange,onSave,onEdit}){
       
 
    return (
        <div>
             {
                todos.map((todo)=>{
                    return (
                         <TodoItem 
                         key={todo.id} 
                         todo={todo}
                         onChange={onChange}
                         onDelete={onDelete}
                         onEdit={()=>{onEdit()}}
                         onSave ={()=>{onSave()}}
                         />
                    )
               })
           }
        </div>
    )
}
export default TodoList;