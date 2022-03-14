import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import SearchBar from "./SearchBar";


function Todo(){
    const [todos, setTodos]= useState([]);
    //    const [text, setText] = useState("");  
   
const completeTodo = id =>{
  let updatedTodos = todos.map(todo =>{
    if(todo.id === id){
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
  setTodos(updatedTodos);
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
          // onEdit={()=>{handleChange()}}
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