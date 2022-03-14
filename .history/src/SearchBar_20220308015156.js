import React, {useState} from "react";
 

function SearchBar({placeholder, data}){
    const [filteredData, setFilteredData]= useState([]);
    const [wordEntered, setwordentered]=useState("");

    const handleFilter = (event)=>{
        constSearchWord= event.target.value;
        setwordentered(searchWord);
        const newFilter = data.filter((value)=>{
           return data.value.toLowerCase().includes(searchWords.toLowerCase());
        });
        setFilteredData(newFilter);
    };
    return(
        <div className="search">
            <div className="searchInput">
                <input type="text"
                 placeholder={placeholder}
                 value={wordEntered}
                 onChange={handleFilter}
                 />
              <div className="searchIcon"></div>
            </div>
               {filteredData.length !=0 && (
            <div className="dataResult">{filteredData.slice(0,10).map((value,key)=>{
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