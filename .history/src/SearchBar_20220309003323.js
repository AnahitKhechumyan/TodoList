
import React, {useState} from "react";
import './SearchBar.css';
import TodoItem from "./TodoItem";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {'fa-solid fa-magnifying-glass'} from '@fortawesome/free-solid-svg-icons';
//import {'fa-solid fa-xmark' } from '@fortawesome/free-solid-svg-icons';
 

function SearchBar({placeholder,data}){
    const [filteredData, setfilteredData]= useState([]);
    const [wordEntered, setWordEntered]=useState("");
          console.log(filteredData);
    const handleFilter = (event)=>{
        const searchWord= event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
           return data.value.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ===""){
            setfilteredData([]);
        }else{
            setfilteredData(newFilter);
        }     
    };
     const clearInput =()=>{
        setfilteredData([]);
        setWordEntered("");
     }
    return(
        <div className="search">
            <TodoItem />
              <div className="searchInputs">
                <input type="text"
                 placeholder={placeholder}
                 value={wordEntered}
                 onChange={handleFilter}
                 />
              <div className="searchIcon">
                 {filteredData.length ===0 ? <button>O</button> : <button  id = "clearBtn" onClick={clearInput}>X</button>}
              </div>
            </div>
               {filteredData.length !==0 && (
            <div className="dataResult">{filteredData.slice(0,5).map((value,key)=>{
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