import React, {useState} from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
import { Book } from "@mui/icons-material";
 
 

function App() {
  const [todos]= useState([]);
  return (
    <div className="App">
       <Todo/>
       <SearchBar plaseholder="Search..." data={[read, eat, talk ]}/> 
    </div>
  );
}

export default App;
