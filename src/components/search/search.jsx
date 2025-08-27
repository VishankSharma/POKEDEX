import useDebounce from "../../hooks/useDebounce";
import "./Search.css"

function Search({updateSearchTerm}) {
    const debouncedCallBack = useDebounce(e=>updateSearchTerm(e.target.value),500);

    return (
        <div className="search-wrapper">
            <input type="text" 
            placeholder="pokemon name..." 
            id="pokemon-name-search" 
            onChange={(e)=> debouncedCallBack(e,'123')} />
            
        </div>
      
    )
}

export default Search;