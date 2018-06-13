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
      <section className="launch-details_section">
        <Header
        onBackClick={this.props.onBackClick}/>
         <div className="launch-details__container">
            <div className="launch-details__body launch-details__body--uppercase">
                <h2 className="launch-details__sub-title">{date}</h2>
                <h1 className="launch-details__title">{this.props.launch.launch_site.site_name}</h1>
                <CountDown to={date_of_start} today={Math.floor(new Date().getTime()/1000)} />
                <img className="launch-details__img" src={this.props.launch.links.mission_patch} />
            </div>
            <div className="launch-details__body">
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