import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import SearchBar from "./SearchBar";


function Todo(){
    const [todos, setTodos]= useState([]);  

    function editTask(id,newTask){
      const editedTaskList = todos.map(todo =>{
        if(id === todo.id){
          return {...todo, name: newTask}
        }
         return todo;
      });
      setTodos(editedTaskList);
    }
    return(
      <div>
        <div>       
        <TodoForm onAdd={(text)=>{
            setTodos([
               ...todos,
               {
                id:Math.random(),
                text:text,
                isCompleted: false
              }
            ]);
          }}/>
           <TodoList 
           todos={todos}
           onEdit={()=>{editTask()}}
           onDelete={(todo)=>{
            setTodos(todos.filter((t)=> t.id !== todo.id)) 
           }}
            onChange={(newTodo)=> {
             setTodos(todos.map((todo)=>{
                if(todo.id === newTodo.id){
                  return newTodo;
                }
                return todo;
              }));
            }}
           />
           <TodoFooter todos={todos} onClearCompleted={()=> {
             setTodos(todos.filter((todo)=> !todo.isCompleted));
           }}/>
           </div>
          <div>
            <SearchBar plaseholder="Search..." data={todos}/>
          </div> 
        </div>    


    )
}
export default Todo;