import React from 'react';


class LaunchPad extends React.Component {
  render() {


    return (
      <section className="launch-pad__section">
          <h1 className="launch-pad__title">LaunchPad</h1>
        <div className="launch-pad__container">
          <div className="launch-pad__body">
            <ul>
              <li key="launch-pad-name">name:  </li>
              <li className="launch-pad__list" key="launchPad-name__results"> {this.props.name}</li>
            </ul>
          </div>
          <div className="launch-pad__body">
            <ul>
              <li key="location">location: </li>
              <li className="launch-pad__list" key="location-name__results">{this.props.location.name}, {this.props.location.region}</li>
            </ul>
          </div>
        </div>
          <p>{this.props.details}</p>
      </section>
    );
  }
}

export default LaunchPad;
