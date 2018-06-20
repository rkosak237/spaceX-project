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


import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';
import { RingLoader } from 'react-spinners';

@inject('MainStore')
@observer
class LaunchDetails extends React.Component {

  render() {
    const { MainStore, rocketData, launch } = this.props.MainStore;
    const date = format(launch.date, 'DD MMMM YYYY', {locale: en})
    const date_of_start = launch.launch_date_unix;
    console.log(launch);
    return (
      <section className="launch-details_section">
        <Header
        onBackClick={this.props.onBackClick}/>
         <div className="launch-details__container">
            <div className="launch-details__body launch-details__body--uppercase">
                <h2 className="launch-details__sub-title">{date}</h2>
                <h1 className="launch-details__title">{launch.site_name}</h1>
                <CountDown to={date_of_start} today={Math.floor(new Date().getTime()/1000)} />
                <img className="launch-details__img" src={launch.links} />
            </div>
            <div className="launch-details__body">
              <Details
              details={this.props.launch.details}
              />
              <Rocket/>
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