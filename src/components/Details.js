import React from 'react';
import './../styles/_Details.sass';

class Details extends React.Component {
  render() {

    return (
      <div className="details-container">
        <h1 className="details__title"> Details</h1>
        <div className="details__copy">
          <p>{this.props.details}</p>
        </div>
      </div>  
    );
  }
}

export default Details;