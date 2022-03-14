function TodoItem({todo}){
    return(
        <div>
            <label>
                <input type="cneckbox"/>
                 {todo.text}
                <button>X</button>
            </label>
        </div>
    )
}
export default TodoItem;