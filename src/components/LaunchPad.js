import React from 'react';
import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';
import { RingLoader } from 'react-spinners';

@inject('MainStore')
@observer
class LaunchPad extends React.Component {
  render() {
const {siteData} = this.props.MainStore;
const {launchSiteData} = this.props.MainStore.siteData;

    return (
      <section className="launch-pad__section">
          <h1 className="launch-pad__title">LaunchPad</h1>
          { siteData.isLoading ?
          <div className='sweet-loading'>
              <RingLoader
                color={'#FFF'}
                loading={siteData.isLoading}
                />
              </div>
              : siteData.isFailed ?
              <div className='list__error'>
                <span className="list__error-text">Sorry, no launches found</span>
              </div>
              :
            <div>
            <div className="launch-pad__container">
              <div className="launch-pad__body">
                <ul>
                  <li key="launch-pad-name">name:  </li>
                  <li className="launch-pad__list" key="launchPad-name__results"> {launchSiteData.full_name}</li>
                </ul>
              </div>
              <div className="launch-pad__body">
                <ul>
                  <li key="location">location: </li>
                  <li className="launch-pad__list" key="location-name__results">{launchSiteData.location.name}, {launchSiteData.location.region}</li>
                </ul>
              </div>
            </div>
          <p>{launchSiteData.details}</p>
        </div>}
      </section>
    );
  }
}

export default LaunchPad;
