import  TodoItem from "./TodoItem";

function TodoList({todos, onDelete, onChange }){
    return (
        <div>
            {
                todos.map((todo)=>{
                    return (
                         <TodoItem 
                         key={todo.id} 
                         todo={todo}
                         onChange={onDelete}
                         onDelete={onChange}
                         />
                    )
                })
            }
        </div>
    )
}
export default TodoList;