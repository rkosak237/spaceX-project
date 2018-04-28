import React from 'react';
import PropTypes from 'prop-types';


class Details extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Details',
  };

  render() {

    return (
      <div>
        <h1 >
        Details
          <span></span>
        </h1>
      </div>
    );
  }
}

export default Details;
