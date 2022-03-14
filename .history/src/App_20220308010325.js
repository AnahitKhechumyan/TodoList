import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 

function App() {
  const [todos]= useState([]); 
  return (
    <div className="App">
       <Todo/>
       <SearchBar data = {todos}/>
    </div>
  );
}

export default App;
