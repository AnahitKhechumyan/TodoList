import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 
 

function App() {
   
  return (
    <div className="App">
      <SearchBar />
       <Todo/>
       
    </div>
  );
}

export default App;
