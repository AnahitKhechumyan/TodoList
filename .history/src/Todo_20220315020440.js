import React, { useEffect, useRef, useState } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import SearchBar from "./SearchBar";


function Todo({text,todo,setTodo,value,setValue,setEdit filterData}){
    const [todos, setTodos]= useState([]);
     

    const renderCount = useRef(0);
    useEffect(() => { 
      renderCount.current = renderCount.current + 1
     });
  
   
    return(
      <div>
        <div> 
        <div>
            <SearchBar placeholder="Search..." data={todos} filterData={filterData}/>
       </div>      
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
            onEdit= {((id)=>{
              setEdit(text.id);
              setValue(text);
           })}
           
           onSave ={((id)=>{
               let newTodo = [...todo].map(item => {
                   if(item.id ===id){
                       item.title = value;
                   }
                   return item;
               });
               setTodo(newTodo);
               setEdit(null);  
           
           })}
           />
           <TodoFooter todos={todos} onClearCompleted={()=> {
             setTodos(todos.filter((todo)=> !todo.isCompleted));
           }}/>
           </div>
          <div> I rendered {renderCount.current} times </div> 
          
        </div>    
    )
}
export default Todo;