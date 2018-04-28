import React from 'react';
import PropTypes from 'prop-types';

class LaunchPad extends React.Component {
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
          <h1>LaunchPad</h1>
        </h1>
      </div>
    );
  }
}

export default LaunchPad;
