import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function Todo(){
    return(
        <div>
        <TodoForm onAdd={(text)=>{
            setTodos([
               ...todos,
               {
                id:Math.random(),
                text:text,
                isCompleted: false
              }
            ]);
          }}/>
           <TodoList 
           todos={todos}
           onDelete={(todo)=>{
            setTodos(todos.filter((t)=> t.id !== todo.id)) 
           }}
            onChange={(newTodo)=> {
             setTodos(todos.map((todo)=>{
                if(todo.id === newTodo.id){
                  return newTodo;
                }
                return todo;
              }));
            }}
           />
           <TodoFooter todos={todos} onClearCompleted={()=> {
             setTodos(todos.filter((todo)=> !todo.isCompleted));
           }}/>
           </div>
    )
}
