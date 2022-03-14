import {useState} from "react";
import './App.css';

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
       
    </div>
  );
}

export default App;
