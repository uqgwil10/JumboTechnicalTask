import React from "react";
import { Link } from "react-router-dom";
import { useMovieStore } from "../store/store";

const Card = ({ show }: any) => {
  const { cardBaseUrl } = useMovieStore((state: any) => {
    return {
      cardBaseUrl: state.cardBaseUrl,
      selectMovieFunction: state.selectMovieFunction,
    };
  });

  let imageUrl = cardBaseUrl + show.poster_path;
  const rating = show.vote_average * 10;
  const title = show.title;
  const releaseDate =
    new Date(show.release_date).toLocaleString("default", {
      month: "long",
    }) +
    " " +
    new Date(show.release_date).getUTCFullYear();
  const ratingClass =
    "rating " +
    (rating < 30
      ? "rating-red"
      : rating < 70
      ? "rating-purple"
      : "rating-green");
  const linkUrl = "/details/" + show.id;

  if (!show.poster_path) {
    imageUrl =
      "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png";
  }
  return (
    <Link to={linkUrl}>
      <div className="cardContainer">
        <div className="cardImage">
          <img src={imageUrl} alt="cardImage" />
          <span className={ratingClass}>{rating}%</span>
        </div>
        <div className="cardText">
          <div className="cardTextTitle">{title}</div>
          <div className="textMuted">{releaseDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
