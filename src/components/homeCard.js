import React from 'react';
import { Link} from 'react-router-dom'

class Card extends React.Component {
    render() {
        var imageUrl = this.props.cardBaseUrl + this.props.show.poster_path;
        const rating = this.props.show.vote_average*10;
        const title = this.props.show.title;
        const releaseDate = new Date(this.props.show.release_date).toLocaleString('default', { month: 'long' }) + " "+ new Date(this.props.show.release_date).getUTCFullYear();
        const ratingClass = "rating "+ (rating  < 30 ? "rating-red" : (rating  < 70 ? "rating-purple":"rating-green" ))
        var selectMovieFunction = this.props.selectMovieFunction;
        const showId = this.props.show.id;
        const linkUrl = "/details/" + this.props.show.id;

        if(!this.props.show.poster_path ){
            imageUrl = "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png";
        }

        return (
            <Link to={linkUrl}>
                    <div className="cardContainer"  onClick = {(e) => selectMovieFunction({showId}, e)} >
                        <div className="cardImage">
                            <img src={imageUrl} alt="cardImage" />
                            <span className={ratingClass}>{rating}%</span>
                        </div>
                        <div className="cardText">
                            <div className="cardTextTitle">
                                {title}
                            </div>
                            <div className="textMuted">
                                {releaseDate}
                            </div>
                        </div>
                    </div>
            </Link>
      );
    }
  }
 export default Card;