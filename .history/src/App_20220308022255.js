import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 
 

function App() {
  const [todos, setTodos]= useState([]);
  return (
    <div className="App">
       <Todo/>
       <SearchBar plaseholder="Search..." data= {todos}/>
    </div>
  );
}

export default App;
