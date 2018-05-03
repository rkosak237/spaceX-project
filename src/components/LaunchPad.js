import React from 'react';
import PropTypes from 'prop-types';
import './../styles/_LaunchPad.sass';

class LaunchPad extends React.Component {
  render() {
 

    return (
      <div>
          <h1 className="category__title">LaunchPad</h1>
        <div className="launchPad__copyContainer"> 
          <div className="launchPad__specification"> 
          <p>name</p>
          </div>

          <div className="launchPad__stats"> 
          <p>location:</p>
          </div>
        </div>
          <p></p>
      </div>
    );
  }
}

export default LaunchPad;
