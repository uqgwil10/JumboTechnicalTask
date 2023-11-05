import React from "react";

const DetailsHeader = ({ cardBaseUrl, show }: any) => {
  const imageUrl = cardBaseUrl + show.poster_path;
  const rating = show.vote_average * 10;
  const title = show.title;
  const releaseDate = new Date(show.release_date).getUTCFullYear();
  const runtime =
    Math.floor(show.runtime / 60) + "h " + (show.runtime % 60) + " min";

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
            <p>
              {releaseDate} &middot; {rating}% User Score
            </p>
            <p>{runtime}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default DetailsHeader;
