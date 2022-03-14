import React, {useEffect} from "react";
import  TodoItem from "./TodoItem";
 

function TodoList({todos, setTodos, onChange, onDelete, onEdit, onAdd}){
    useEffect(()=>{
        console.log("ok")
    }, [todos]);
 
    return (
        <div>
             {
                todos.map((todo)=>{
                    return (
                         <TodoItem 
                         key={todo.id} 
                         todo={todo}
                         todos={todos}
                         setTodos={setTodos}
                         onChange={onChange}
                         onDelete={onDelete}
                         onEdit={onEdit}
                         onAdd ={onAdd}
                         />
                    )
               })
           }
        </div>
    )
}
export default TodoList;