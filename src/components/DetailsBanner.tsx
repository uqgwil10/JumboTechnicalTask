import React from "react";
import { Link } from "react-router-dom";

const DetailsBanner = ({ bannerUrl }: any) => {
  const style = {
    backgroundImage: `url(${bannerUrl})`,
  };
  return (
    <div>
      <div className="detailBannerImageContainerSmallScreen">
        <div className="container">
          <div className="row">
            <Link to={".."} className="backLink">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="detailBannerImageContainer">
        <div className="detailBannerImage" style={style}>
          <div className="container">
            <Link to={".."} className="backLink">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
