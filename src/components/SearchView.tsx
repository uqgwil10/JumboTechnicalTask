import React, { useEffect } from "react";
import HomeBanner from "./HomeBanner";
import SearchBar from "./HomeSearch";
import { useMovieStore } from "../store/store";
import { Store } from "../types";
import Cards from "./Cards";
import { queryDiscover, searchBasedOnQuery } from "../store/queries";

const SearchView = () => {
  const { searchResults, searchQuery, setSearchResults } =
    useMovieStore() as Store;

  const searchMovieData = async () => {
    if (searchQuery.length > 0) {
      await searchBasedOnQuery(searchQuery, setSearchResults);
    } else {
      await queryDiscover(setSearchResults);
    }
  };

  useEffect(() => {
    searchMovieData();
  }, [searchQuery]);

  return (
    <div>
      <header className="App-header">
        <HomeBanner />
      </header>

      <div>
        <div className="container searchViewContainer">
          <div className="row justify-content-md-center">
            <SearchBar />

            <div className="col-sm-12 resultsHeader">
              <h2 className="searchViewHeader">Popular Movies</h2>
            </div>
            {searchResults && <Cards searchResults={searchResults} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
