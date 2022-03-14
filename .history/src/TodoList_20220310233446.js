import React from "react";
import  TodoItem from "./TodoItem";

function TodoList({todos, onDelete, onChange, onEdit   }){

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
                         edit={edit}
                         />
                    )
                })
            }
        </div>
    )
}
export default TodoList;