import React from "react";

function SearchBar({ keyword, keywordChange }) {
    return (
            <input
              className="search"
              type="text"
              placeholder="search"
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}        
            />
          )
        }

export default SearchBar;
