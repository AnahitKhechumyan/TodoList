import React from "react";
import  TodoItem from "./TodoItem";
import  TodoForm from "./TodoForm";


function TodoList(){
    const [todos, setTodos]= useState([]);

    return (
        <div>
            <TodoForm/>
            {
                todos.map((todo)=>{
                    return (
                         <TodoItem 
                         key={todo.id} 
                         todo={todo}
                         onChange={onChange}
                         //onDelete={onDelete}
                         //edit={edit}
                         />
                    )
                })
            }
        </div>
    )
}
export default TodoList;