import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 
 

function App() {
  const [todos]= useState([]);
  return (
    <div className="App">
       <Todo/>
       
       <SearchBar plaseholder="Search..." data= {[todos]}/>
       console.log(data);
    </div>
  );
}

export default App;
