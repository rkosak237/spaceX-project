
import React from 'react';
import PropTypes from 'prop-types';
import Details from './components/Details';
import Rocket from './components/Rocket';
import LaunchPad from './components/LaunchPad';
import './styles/_LaunchDetails.sass';

class LaunchDetails extends React.Component {

  render() {
 

    return (
      <section className="launchDetails_container">
         <div className="launchDetails__wraper">
            <div className="launchDetails-wraper__rocketLaunch">
                <h2 className="launchDetails__title">07 july 2018</h2>
                <h1>Iridium next 5 launch</h1>
                <p>20 days 11 hrs 34 mins to start</p>
            </div>
            <div className="launchDetails-wraper__rocketDetails">
              <Details />
              <Rocket />
              <LaunchPad />
            </div>
         </div>
      </section>
    );
  }
}

export default LaunchDetails;
