import React from "react";
import {useState} from "react";
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
   const [todos, setTodos]= useState([
     {
     id: Math.random(),
     text: "Learn JS",
     isCompleted: false
     },
     {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
      },
      {
        id: Math.random(),
        text: "Learn JS",
        isCompleted: false
        }
   ]);
   
  return (
    <div className="App">
      <TodoForm/>
       <TodoList todos={todos}/>
    </div>
  );
}

export default App;
