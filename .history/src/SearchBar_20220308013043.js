import React, {useState} from "react";
import Todo from "./Todo";

function SearchBar({placeholder, data}){
    return(
        <div className="search">
            <div className="searchInput">
                <input type="text"
                 placeholder={placeholder}
                 value={wordEntered}
                 onChange={handeleFilter}
                 />
              <div className="searchIcon"></div>
            </div>
               {filteredData.length !=0 && (
            <div className="dataResult">{data.map((value,key)=>{
               return (
                   <div className='dataItem'>{data.value}</div>
               )
            })}
            </div>
            )}
        </div>
    )
}
export default SearchBar;