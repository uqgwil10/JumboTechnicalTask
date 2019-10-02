import React from 'react';
class DetailsHeader extends React.Component {
    render() {
        var imageUrl = this.props.cardBaseUrl + this.props.show.poster_path;
        const rating = this.props.show.vote_average*10;
        const title = this.props.show.title;
        const releaseDate = new Date(this.props.show.release_date).getUTCFullYear();
        const runtime = Math.floor(this.props.show.runtime/60) +'h ' + (this.props.show.runtime % 60) + ' min';

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 cardImageHoverContainer">
                        <div className="cardImage">
                            <img src={imageUrl} alt="bannerImage" />
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-7 detailsInfo">
                        <h1>{title}</h1>
                        <div className="textMuted">
                            <p>{releaseDate} &middot; {rating}% User Score</p>
                            <p>{runtime}</p>
                        </div>

                    </div>
                    <hr />
                </div>
            </div>
      );
    }
  }
 export default DetailsHeader ;



