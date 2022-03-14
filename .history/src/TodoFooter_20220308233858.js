import React from"react";
//import TodoList from "./TodoList";

function TodoFooter({todos, onClearCompleted}){
const completedSize = todos.filter((todo)=> todo.isCompleted).length;

     return (
         <div className="footer">
             <div className="tasksDone">
            <span>{completedSize} of {todos.length} tasks done</span>
            </div>
             <button classname="removeBtn" onClick={onClearCompleted}>Remove checked</button>
         </div>
     )
}
export default TodoFooter;