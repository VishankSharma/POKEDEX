import "./Search.css"

function Search({updateSearchTerm}) {

    return (
        <div className="search-wrapper">
            <input type="text" 
            placeholder="pokemon name..." 
            id="pokemon-name-search" 
            onChange={(e)=>updateSearchTerm(e.target.value)} />
            
        </div>
      
    )
}

export default Search;