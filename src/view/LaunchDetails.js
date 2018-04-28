import React from 'react';
import PropTypes from 'prop-types';

class LaunchDetails extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Launch',
  };

  render() {
 

    return (
      <div>
        <h1 >
          <h1>Launch</h1>
          <span >bla</span>
        </h1>
      </div>
    );
  }
}

export default LaunchDetails;
