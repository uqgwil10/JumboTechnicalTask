import React from 'react';
import DetailsBanner from './detailsBanner.js'
import DetailsHeader from './detailsHeader.js'
import DetailsDescription from './detailsDescription.js'

class DetailsView extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        
      }
    render() {
        this.props.checkIfShowIdNeedsUpdating();
        var show = this.props.show 
        var bannerUrl = this.props.backDropBaseUrl + show.backdrop_path;
        var cardBaseUrl = this.props.cardBaseUrl
        var backToSearchView = this.props.backToSearchView;
        return (
            
            <div>
                <DetailsBanner backToSearchView={backToSearchView} bannerUrl={bannerUrl} />
                <DetailsHeader show={show} cardBaseUrl={cardBaseUrl} />
                <DetailsDescription overview={show.overview}/>
            </div>
      );
    }
  }
 export default DetailsView;