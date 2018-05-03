import React from 'react';
import PropTypes from 'prop-types';
import './../styles/_Details.sass';

class Details extends React.Component {
  render() {

    return (
      <div className="details-container">
        <h1 className="details__title"> Details</h1>
        <div className="details__copy">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>  
    );
  }
}

export default Details;
