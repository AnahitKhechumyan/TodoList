function TodoList(){
    return (
        <div>
            {
                TodoList.map((todo)=>{
                    return (
                        <div key={todo.id}>{todo.text}</div>
                    )
                })
            }
        </div>
    )
}
export default TodoList;