import React from 'react';


class LaunchPad extends React.Component {
  render() {
 

    return (
      <section>
          <h1 className="launchPad__title">LaunchPad</h1>
        <div className="launchPad__copyContainer"> 
          <div className="launchPad__specification">
            <ul>
              <li key="launchPad-name">name:  </li>
              <li className="specification_results" key="launchPad-name__results"> {this.props.name}</li>
            </ul>
          </div>
          <div className="launchPad__stats"> 
          <ul>
            <li key="location">location: </li>
            <li className="specification_results" key="location-name__results">{this.props.location.name}, {this.props.location.region}</li>
          </ul>
          </div>
        </div>
          <p>{this.props.details}</p>
      </section>
    );
  }
}

export default LaunchPad;
