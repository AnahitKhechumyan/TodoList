import React, {useState} from "react";
import  TodoItem from "./TodoItem";
import  TodoForm from "./TodoForm";


function TodoList({todo, onDelete,onChange,edit}){
    //const [todos, setTodos]= useState([]);

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