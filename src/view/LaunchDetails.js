
import React from 'react';
import PropTypes from 'prop-types';
import Details from './../components/Details';
import Rocket from './../components/Rocket';
import LaunchPad from './../components/LaunchPad';
import './../styles/_LaunchDetails.sass';
import { format, toUpper } from 'date-fns';
import { en } from 'date-fns/locale/en'
import CountDown from './../components/CountDown';
import Header from './../components/Header';

class LaunchDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      launch: null
    }
  }
  render() {
    const date = format(this.props.launch.launch_date_local, 'DD MMMM YYYY', {locale: en})
    const date_of_start = this.props.launch.launch_date_unix
    
    return (
      <section className="launchDetails_container">
        <Header 
        onBackClick={this.props.onBackClick}/>
         <div className="launchDetails__wraper">
            <div className="launchDetails-wraper__rocketLaunch">
                <h2 className="launchDetails__title">{date}</h2>
                <h1>Iridium next 5 launch</h1>
                <CountDown to={date_of_start} today={Math.floor(new Date().getTime()/1000)} />
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
