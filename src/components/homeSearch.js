import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            queryValue: "",
            searchQuery:""
          };
          this.handleKeyDown = this.handleKeyDown.bind(this);
          this.onClickEvent = this.onClickEvent.bind(this);
          this.setQueryValue = this.setQueryValue.bind(this); 
      }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.props.searchFunction(e.target.value)
        }
      }

      onClickEvent = () => {
          this.props.searchFunction(this.state.queryValue)
      }

      setQueryValue(e){
        this.setState({queryValue:e.target.value})
      }

    render() {
        return (
            <div className="container">
                <div className="searchbar row" >
                    <div className = "col-9 col-sm-11">
                        <input className="search_input" type="text" name=""  placeholder="Search" onChange={this.setQueryValue} onKeyDown={this.handleKeyDown}  ref={(c) => this.query = c}   />
                    </div>
                    <div className = "col-3 col-sm-1">
                        <span  className="search_icon" onClick={this.onClickEvent}><i className="fas fa-search"></i></span>
                    </div>
                </div>
        </div>     
      );
    }
  }
 export default SearchBar;