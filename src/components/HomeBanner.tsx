import React from "react";

import BannerImage from "./logo.svg";

class HomeBanner extends React.Component {
  render() {
    return (
      <div className="homeBanner">
        <div>
          <div className="homeBannerContainer">
            <img
              src={BannerImage}
              alt="The Movie Database (TMDb)"
              width="130"
              height="116"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default HomeBanner;
