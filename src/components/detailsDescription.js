import React from 'react';
class DetailsDescription extends React.Component {
    render() {
        var overview = this.props.overview
        return (
            <div className ="container">
                <div className ="row">
                    <div className="detailsDescription">
                        <h2>Overview</h2>
                        <p className="textMuted">{overview}</p>
                    </div>
                </div>
            </div>
      );
    }
  }
 export default DetailsDescription;