import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 
 
 

function App() {
  const [todos]= useState([]);
  return (
    <div className="App">
       <SearchBar plaseholder="Search..." data={todos}/> 
       <Todo/>
    </div>
  );
}

export default App;
