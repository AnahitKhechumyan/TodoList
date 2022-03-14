import TodoList from "./TodoList";

function TodoFooter({todos, onClearCompleted}){
const completedSize = todos.filter((todo)=> todo.isCompleted).length;

     return (
         <div>
            <spsn>{completedSize} of {todos.length} tasks done</spsn>
             <button  onClick={onClearCompleted}>Remove checked</button>
         </div>
     )
}
export default TodoFooter;