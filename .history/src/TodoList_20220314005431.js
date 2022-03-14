//import React, {useState} from "react";
//import  TodoItem from "./TodoItem";
//import  TodoForm from "./TodoForm";

import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

function TodoList({todo,todos,setTodo, setTodos }){
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
   

function deleteTodo(id){
 let newTodo =[...todo].filter(item => item.id !== id)
  setTodo(newTodo);
}; 

function editTodo(id, title){
   setEdit(id);
   setValue(title);
}

function saveTodo(id){
    let newTodo = [...todo].map(item => {
        if(item.id ===id){
            item.title = value;
        }
        return item;
    });
    setTodo(newTodo);
    setEdit(null);  

}

/*function statusTodo(id){
    let newTodo = [...todo].filter(item => {
        if(item.id === id){
            item.status = !item.status;
        }
        return item;
    });
     setTodo(newTodo); 
};*/

    return(
        <div>
            {
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
            }
        </div>
    );
};
/*function TodoList({todos, onDelete,onChange,edit}){
    //  const [todos, setTodos]= useState([]);

    return (
        <div>
             {
                todos.map((todo)=>{
                    return (
                         <TodoItem 
                         key={todo.id} 
                         todo={todo}
                         onChange={onChange}
                         onDelete={onDelete}
                         edit={edit}
                         />
                    )
               })
           }
        </div>
    )
}*/
export default TodoList;