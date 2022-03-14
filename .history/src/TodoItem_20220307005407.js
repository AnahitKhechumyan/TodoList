function TodoItem({todo}){
    return(
        <div>
            <label>
                <input type="cneckbox" checked={todo.isCompleted}/>
                 {todo.text}
                <button>X</button>
            </label>
        </div>
    )
}
export default TodoItem;