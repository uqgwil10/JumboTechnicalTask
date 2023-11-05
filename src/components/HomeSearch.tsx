import React, { useState } from "react";
import { useMovieStore } from "../store/store";
import { Store } from "../types";

const SearchBar = () => {
  const { setSearchQuery } = useMovieStore() as Store;

  const [queryValue, setQueryValue] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setSearchQuery(e.target.value);
    }
  };

  const onClickEvent = () => {
    setSearchQuery(queryValue);
  };

  return (
    <div className="container">
      <div className="searchbar row">
        <div className="col-9 col-sm-11">
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Search"
            onChange={(e) => setQueryValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-3 col-sm-1">
          <span className="search_icon" onClick={onClickEvent}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
