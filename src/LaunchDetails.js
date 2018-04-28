
import React from 'react';
import PropTypes from 'prop-types';
import Details from './components/Details';
import Rocket from './components/Rocket';
import LaunchPad from './components/LaunchPad';

class LaunchDetails extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Launch',
  };

  render() {
 

    return (
      <div className="Launch_container">
          <h1>LaunchDetails</h1>
         <div>
         containter 
            <div>Left </div>
            <div>rigth
              <Details />
              <Rocket />
              <LaunchPad />
            </div>
         </div>
      </div>
    );
  }
}

export default LaunchDetails;
