import React from "react";
const DetailsDescription = ({ overview }: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="detailsDescription">
          <h2>Overview</h2>
          <p className="textMuted">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDescription;
