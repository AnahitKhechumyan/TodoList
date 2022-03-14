import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
 
 
 

function App() {
   
  return (
    <div className="App">
       <Todo/>
       <SearchBar />
    </div>
  );
}

export default App;
