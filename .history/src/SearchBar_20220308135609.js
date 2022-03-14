
import React, {useState} from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
 

function SearchBar({placeholder,data}){
                     
    const [filteredData, setFilteredData]= useState([]);
    const [wordEntered, setWordEntered]=useState("");

    const handleFilter = (event)=>{
        const searchWord= event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
           return data.value.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ===""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }     
    };
     const clearInput =()=>{
        setFilteredData([]);
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
                 {filteredData.length ===0 ? <button>O</button>: <button id = "clearBtn" onClick={clearInput}>X</button> }
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