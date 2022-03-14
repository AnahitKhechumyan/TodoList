
import React, {useState} from "react";
import './SearchBar.css';
//import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
 

function SearchBar({placeholder,data}){
    const [filteredData, setfilteredData]= useState([]);
    const [wordEntered, setWordEntered]=useState("");
          console.log(filteredData);
    const handleFilter = (event)=>{
        const searchWord= event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((item)=>{
           return item.text.toLowerCase().includes(searchWord.toLowerCase());
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
             
              <div className="searchInputs">
                <input type="text"
                 placeholder={placeholder}
                 value={wordEntered}
                 onChange={handleFilter}
                 />
              <div className="searchIcon">
                 {filteredData.length ===0 ? <FontAwesomeIcon icon={faMagnifyingGlass} className="glass"/> : <FontAwesomeIcon icon={faXmark}  id = "clearBtn" onClick={clearInput}/>}
              </div>
            </div>
               {filteredData.length !==0 && (
            <div className="dataResult">{filteredData.slice(0,5).map((filteredDataItem,key)=>{
                 
               return (
                   <div className='dataItem'><p>{filteredDataItem.text}</p></div>
               );
            })}
            
            </div>
            )}
        </div>
    );
}
export default SearchBar;