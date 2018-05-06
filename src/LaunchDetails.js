
import React from 'react';
import PropTypes from 'prop-types';
import Details from './components/Details';
import Rocket from './components/Rocket';
import LaunchPad from './components/LaunchPad';
import './styles/_LaunchDetails.sass';

const result = require('date-fns/is_today')


class LaunchDetails extends React.Component {

  render() {    
    return (
      <section className="launchDetails_container">
         <div className="launchDetails__wraper">
            <div className="launchDetails-wraper__rocketLaunch">
                <h2 className="launchDetails__title">07 july 2018</h2>
                <h1>Iridium next 5 launch</h1>
                <p>{
                 this.props.launch.launch_date_local
                }</p>
                <p>20 days 11 hrs 34 mins to start</p>
                <img src={this.props.launch.links.mission_patch} />
            </div>
            <div className="launchDetails-wraper__rocketDetails">
              <Details
              details={this.props.launch.details}

              />
              <Rocket
              description={this.props.rocket.description}
              name={this.props.rocket.name} 
              company={this.props.rocket.company}
              height={this.props.rocket.height}
              diameter={this.props.rocket.diameter}
              mass={this.props.rocket.mass}
              first_flight={this.props.rocket.first_flight}
              country={this.props.rocket.country}
              success_rate={this.props.rocket.success_rate_pct}
              cost={this.props.rocket.cost_per_launch}
              />
              <LaunchPad 
              name={this.props.launchSite.full_name}
              location={this.props.launchSite.location}
              details={this.props.launchSite.details}
              />
            </div>
         </div>
      </section>
    );
  }
}

export default LaunchDetails;
