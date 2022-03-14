
import React, {useState} from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
 

function SearchBar({placeholder,data}){
                     
    const [todos, setTodos]= useState([]);
    const [wordEntered, setWordEntered]=useState("");

    const handleFilter = (event)=>{
        const searchWord= event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
           return data.value.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ===""){
            setTodos([]);
        }else{
            setTodos(newFilter);
        }     
    };
     const clearInput =()=>{
        setTodos([]);
        setWordEntered("");
     }
    return(
        <div className="search">
            <div className="searchInput">
                <input type="text"
                 placeholder={placeholder}
                 value={wordEntered}
                 onChange={handleFilter}
                 />
              <div className="searchIcon">
                 {todos.length ===0 ? <button>O</button>: <button id = "clearBtn" onClick={clearInput}>X</button> }
              </div>
            </div>
               {todos.length !==0 && (
            <div className="dataResult">{todos.slice(0,5).map((value,key)=>{
               return (
                   <div className='dataItem'><p>{data.value}</p></div>
               );
            })}
            </div>
            )}
        </div>
    );
}
export default SearchBar;