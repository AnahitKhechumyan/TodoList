import React from"react";

function TodoItem({todo, onChange, onDelete}){

    return(
        <div className = "todoAppLabel">
            <label>
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 {todo.text}
                <button  className="deleteButton" onClick={()=>{
                    onDelete(todo);
                    }}>X</button>
             </label>
        </div>
    )
}
export default TodoItem;