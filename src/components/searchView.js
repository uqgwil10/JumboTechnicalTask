import React from 'react';
import HomeBanner from './homeBanner.js'
import SearchBar from './homeSearch.js'

class SearchView extends React.Component  {
    render() {
        var cards = this.props.cards;
        var searchBasedOnQuery = this.props.searchBasedOnQuery;
        return (
            <div>
                <header className="App-header">
                    <HomeBanner/>
                </header>
    
                <div>
                    <div className="container searchViewContainer">
                        <div className="row justify-content-md-center">
                            <SearchBar  searchFunction={searchBasedOnQuery} />
                     
                            <div className = "col-sm-12 resultsHeader">
                                <h2 className="searchViewHeader">Popular Movies</h2>
                            </div>
                            {cards}
                        </div>
                    </div>
                </div>
          </div>
        );
      }
}
export default SearchView;