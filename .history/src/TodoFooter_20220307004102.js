import TodoList from "./TodoList";

function TodoFooter({todos}){
     return (
         <div>
             <spsn>1 of {todos.length} tasks done</spsn>
             <button>Remove checked</button>
         </div>
     )
}
export default TodoFooter;