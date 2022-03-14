import React from "react";
import './App.css';
import Todo from "./Todo";
import SearchBar from "./SearchBar";
 

function App() {
  const [todos, setTodos]= useState([]); 
  return (
    <div className="App">
      <SearchBar data = {todos}/>
       <Todo/>
    </div>
  );
}

export default App;
