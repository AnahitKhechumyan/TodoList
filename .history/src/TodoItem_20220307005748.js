function TodoItem({todo, onChange}){
    return(
        <div>
            <label>
                <input type="cneckbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 {todo.text}
                <button>X</button>
            </label>
        </div>
    )
}
export default TodoItem;