import React from 'react';
import { Link} from 'react-router-dom'
class DetailsBanner extends React.Component {

    render() {
        var bannerUrl = this.props.bannerUrl 
        const linkUrl = "/";
        var style={
            backgroundImage: `url(${bannerUrl})`
        }
        return (
            <div>
                <div className="detailBannerImageContainerSmallScreen">
                    <div className="container">
                            <div className="row">
                                <Link to={linkUrl} className="backLink">
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="detailBannerImageContainer">
                    <div className="detailBannerImage" style={style}>
                        <div className="container">
                            <Link to={linkUrl} className="backLink">
                                    <i className="fas fa-arrow-left"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }

 export default DetailsBanner ;