import React from "react";
import './App.css';
import Todo from "./Todo";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
 
 
 

function App() {
   const todos = <TodoList/>
  return (
    <div className="App">
      <Todo/>
       <SearchBar plaseholder="Search..." data={todos}/> 
    </div>
  );
}

export default App;
