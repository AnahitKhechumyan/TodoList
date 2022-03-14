import React, { useEffect, useRef, useState } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import SearchBar from "./SearchBar";


function Todo({todo,value,setValue,setEdit}){
    const [todos, setTodos]= useState([]);
     

    const renderCount = useRef(0);
    useEffect(() => { 
      renderCount.current = renderCount.current + 1
     });
  
   
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
          
           onDelete={(todo)=>{
            setTodos(todos.filter((t)=> t.id !== todo.id)) 
           }}
            onChange={(newTodo)=> {
             setTodos(todos.map((todo)=>{
                if(todo.id === newTodo.id){
                  return newTodo;
                }
                console.log(todo)
                return todo;
              }));
            }}
            onEdit={((value)=>{
              console.log(value);
              setEdit({id:todo.id, value:todo.value});
             // setEdit(id);
              setValue(todos);
           })}
         
           onSave={(id)=>{
            let newTodo = todos.map(todo => {
                if(todo.id ===id){
                    todo.text = value;
                }
                return todo;
            });
            setTodos(newTodo);
            setEdit(null);  
        }}
           />
           <TodoFooter todos={todos} onClearCompleted={()=> {
             setTodos(todos.filter((todo)=> !todo.isCompleted));
           }}/>
           </div>
          <div> I rendered {renderCount.current} times </div> 
          <div>
            <SearchBar placeholder="Search..." data={todos}/>
          </div> 
        </div>    
    )
}
export default Todo;