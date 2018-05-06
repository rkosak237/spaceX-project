import React from 'react';
import './../styles/_LaunchPad.sass';

class LaunchPad extends React.Component {
  render() {
 

    return (
      <div>
          <h1 className="launchPad__title">LaunchPad</h1>
        <div className="launchPad__copyContainer"> 
          <div className="launchPad__specification"> 
            <p>name: <span>{this.props.name}</span></p>
          </div>
          <div className="launchPad__stats"> 
          <p>location: <span>{this.props.location.name}, {this.props.location.region}
          </span></p>
          </div>
        </div>
          <p>{this.props.details}</p>
      </div>
    );
  }
}

export default LaunchPad;
