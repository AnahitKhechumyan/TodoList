import React, {useState} from "react";
 

function SearchBar({placeholder, data}){
    const [filtereddata, setFilteredData]= useState([]);
    const [wordEntered, setwordentered]=useState("");

    const handlefilter = (event)=>{
        constSearchWord= event.target.value;
        setwordentered(searchWord);
        const newFilter = data.filter((value)=>{
           return data.value.toLowerCase().includes(searchWords.toLowerCase());
        })
    }
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