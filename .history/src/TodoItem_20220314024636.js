import React from"react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({todo,edit,value, setValue,onChange, onEdit, onDelete, onSave}){
    // const[edit, setEdit] = useState({
    //     id: null,
    //     value:""
    // });
    // const submitUpdate = value =>{
    //     updateTodo(edit.id, value);
    //     setEdit({
    //         id: null,
    //         value: ""
    //     });
    // };
    // if(edit.id){
    //     return <TodoEditForm edit={edit} onSubmit={submitUpdate}/>
    // }
    return  ( 
        <div className = "todoAppLabel">
            <label>
                <div className="text">
                <input  className="check" type="checkbox" checked={todo.isCompleted} onChange={(e)=> {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                 
                 {todo.text}
                
                 </div>
                 <div className="icon">
                { todos.map(item =>(
                    <div key={item.id}> 
                 {
                   edit === todo.id ?
                          <div>
                               <input   value={value} onChange={(e)=>setValue(e.target.value)}/>
                           </div>
                           :
                           <div>{todo.text}</div>    
                 }
                 {
                      edit === todo.id ?
                      <div>
                      <button onClick = {()=>onSave(todo)}>Save</button> 
                   </div>
                      :
                      <div>
                    <button  className="editButton" onClick={()=>
                    onEdit(todo)}
                     >
                    <FontAwesomeIcon icon={faPen} className="pen"/>
                    </button>
                    <button  className="deleteButton" onClick={()=>
                    onDelete(todo)}
                    >
                    <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    </div>
                   }
                    </div>
                ))
}
             </label>
             <div>
            {/*{
                todos.map(item =>(
                    <div key={item.id}>
                        {
                           edit === item.id ? 
                          <div>
                               <input   value={value} onChange={(e)=>setValue(e.target.value)}/>
                           </div>
                           :
                           <div>{item.text}</div>   
                        }
                        {
                            edit === item.id ?
                            <div>
                               <button onClick = {()=>saveTodo(item.id)}>Save</button> 
                            </div>
                            :
                            <div>
                         <button onClick={()=> editTodo(item.id, item.title)}>
                             <FontAwesomeIcon icon={faPen}/>
                          </button>
                          <button onClick={()=>deleteTodo(item.id)}>
                             <FontAwesomeIcon icon={faTrash}/>
                          </button>
                         </div>

                        }
                    </div>
    ))
            }*/}
        </div>

        </div>
)
}
export default TodoItem;