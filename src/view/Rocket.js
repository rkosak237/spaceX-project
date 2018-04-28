import React from 'react';
import PropTypes from 'prop-types';


class Rocket extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Rocket',
  };

  render() {
   

    return (
      <div>
        <h1 >
         Rocket
          <span></span>
        </h1>
      </div>
    );
  }
}

export default Rocket;
