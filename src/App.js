import React from 'react';
import './App.css';
import Card from './components/homeCard.js'
import apiInfo from './components/apiInfo.json'
import DetailsView from './components/detailsView.js'
import SearchView from './components/searchView.js'
import { Router, Route, Link ,withRouter} from 'react-router-dom';
import history from './components/history';


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: {},
      filePath:{},
      cardBaseUrl:{},
      selectedMovie:null,
      backDropBaseUrl:{},
      loadingData:false
    };
   //TODO Move Seaching functionality into the  searchView/SearchBar component.
    this.searchBasedOnQuery = this.searchBasedOnQuery.bind(this);
    this.openMovieDetails = this.openMovieDetails.bind(this);
    this.checkIfShowIdNeedsUpdating = this.checkIfShowIdNeedsUpdating.bind(this);
    this.checkIfShowIdNeedsUpdating()

  }

  // This loads the initial themoviedb config and the default popular list.
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+ apiInfo.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(res => res.json())
    .then((data) => {
      this.setState({searchResults: data.results })
    }).catch(console.log)

    fetch('https://api.themoviedb.org/3/configuration?api_key='+apiInfo.apiKey)
    .then(res => res.json())
    .then((data) => {
      this.setState({
          cardBaseUrl: data.images.secure_base_url + data.images.poster_sizes[4] ,
          backDropBaseUrl: data.images.secure_base_url + data.images.backdrop_sizes[2] ,
      })
    }).catch(console.log)   
  }


  //This is for loading the data if landing directly on a movie page for example details/429203
  //TODO make it so that it stores and loads the search history as part of the browser history and from directly being hit from the url.
  checkIfShowIdNeedsUpdating(){
    var currentUrl =history.location.pathname.split("/");
    var showId = currentUrl[currentUrl.length -1]    
    if(((!this.state.selectedMovie && showId) || ((showId && this.state.selectedMovie) && (this.state.selectedMovie.id.toString() !== showId.toString()))) && !this.state.loadingData ){
        this.setState({
         loadingData:true 
      })
        this.openMovieDetails({"showId":showId})
    }
  }

  //This is the functionality for calling the api for searching based on a query. This would be abstracted out into server side in a live application.
  //TODO move this into the search component.
  searchBasedOnQuery(query){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiInfo.apiKey + '&language=en-US&query='+query+'&page=1&include_adult=false')
    .then(res => res.json())
    .then((data) => {
      this.setState({searchResults: data.results })
    }).catch(console.log)
  }

  //This is the functionality for gathering extra information for a movie based on Id,
  //TODO move this into the details component 
  openMovieDetails(id){
    fetch('https://api.themoviedb.org/3/movie/'+id.showId+'?api_key=' + apiInfo.apiKey + '&language=en-US')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        loadingData:false 
     })
      this.setState({selectedMovie:data})
    }).catch(console.log)
  }

  render() {
    var cards;
    var details;
    var openMovieDetails = this.openMovieDetails;
    var cardBaseUrl = this.state.cardBaseUrl
    if(this.state.searchResults && this.state.searchResults.length > 0 ){
      cards = this.state.searchResults.map(function(show, index) {
        return(<div  key={show.id} className="col-sm-12 col-md-6 col-lg-6"> <Card show={show} cardBaseUrl={cardBaseUrl}  selectMovieFunction={openMovieDetails} /> </div>);
      });
    }

    if(this.state.selectedMovie){
      details = withRouter(props => <DetailsView Link={Link}  checkIfShowIdNeedsUpdating={this.checkIfShowIdNeedsUpdating} backToSearchView={this.backToSearchView} show={this.state.selectedMovie} cardBaseUrl ={this.state.cardBaseUrl} backDropBaseUrl ={this.state.backDropBaseUrl} />)
    }
    
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route path="/details" render={details}  /> 
            <Route exact path="/"  render={withRouter((props) => <SearchView Link={Link}  searchBasedOnQuery={this.searchBasedOnQuery} searchQuery={this.searchQuery} cards={cards} />)} /> 
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
