import React, { useState, useEffect } from "react";
import DetailsBanner from "./DetailsBanner";
import DetailsHeader from "./DetailsHeader";
import DetailsDescription from "./DetailsDescription";
import { useParams } from "react-router-dom";
import { loadMovieDetails } from "../store/queries";
import { useMovieStore } from "../store/store";
import { Store } from "../types";

const DetailsView = () => {
  const { cardBaseUrl, backDropBaseUrl } = useMovieStore() as Store;
  const { showId } = useParams();
  const [show, setShow]: any = useState();

  const loadMovieData = async (showId: string) => {
    const data = await loadMovieDetails(showId);
    setShow(data);
  };

  useEffect(() => {
    if (showId) {
      loadMovieData(showId);
    }
  }, [showId]);
  const bannerUrl = backDropBaseUrl + show?.backdrop_path;
  if (!show) {
    return (
      <span style={{ width: "100%" }}>
        <p style={{ textAlign: "center", padding: "20% 0", fontSize: "4em" }}>
          <i className="fas fa-spin fa-spinner fa-lg"></i> Loading...
        </p>
      </span>
    );
  }

  return (
    show && (
      <div>
        <DetailsBanner bannerUrl={bannerUrl} />
        <DetailsHeader show={show} cardBaseUrl={cardBaseUrl} />
        <DetailsDescription overview={show?.overview} />
      </div>
    )
  );
};

export default DetailsView;
