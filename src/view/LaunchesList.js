import React from 'react';
import FilterButtons from './../components/FilterButtons';
import List from './../components/List';
import { RingLoader } from 'react-spinners';

import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';

@inject('MainStore')
@observer
class LaunchesList extends React.Component {
  constructor(props) {
        super();
    }

  @action handleFilterChange = (value) => {
    let { rocketNameFilter, fetchData }  = this.props.MainStore;
    rocketNameFilter = value;
    if(value == 'All Rockets') {
       value = 'all';
    }
    fetchData(value);
  }


  render() {
    const { launches, isLoading, error } = this.props.MainStore.listState;
    const { availableRocketNames } = this.props.MainStore;
    return (
      <section className="launches-list__section">
        <section className="launches-list__container">
          <div className="launches-list__background-img">
            <a href="#" className="launches-list__logo">
              <svg  className="launches-list__logo-svg"width="590" height="73" viewBox="0 0 590 73">
                  <g fill="none" fillRule="nonzero">
                      <path fill="#FFF" d="M137.45 26.923H87.238l-1.793 1.428v44.44h13.987V56.015l1.255-1.25h36.94c9.325 0 13.63-2.498 13.63-8.924V35.668c-.18-6.246-4.484-8.745-13.809-8.745zm0 16.42c0 3.034-1.973 3.57-6.456 3.57h-30.306l-1.434-1.429v-9.459l1.255-1.25h30.485c4.303 0 6.455.536 6.455 3.57v4.998zM176.113 34.747l11.91 17.289-.71 1.587h-26.31l-6.754 8.292h39.108l2.844 1.588 6.044 8.291h15.82l-34.663-45.868M333.038 64.045V51.799l1.444-1.225h26.897v-7.697h-42.602v29.914h62.82v-7.697h-46.934M318.777 26.923h62.82v8.974h-62.82zM250.492 35.101h50.337c-.712-6.4-4.803-8.178-14.764-8.178h-36.107c-11.383 0-14.94 2.133-14.94 10.845v24.179c0 8.533 3.557 10.844 14.94 10.844h36.107c10.139 0 14.052-1.955 14.408-8.533h-49.981l-1.423-1.423V36.168M52.646 44.88H16.417l-1.06-1.245v-7.823l1.06-.889H65.37l.707-1.6c-1.59-4.267-6.008-6.4-13.961-6.4H18.008c-11.31 0-14.845 2.133-14.845 10.845v5.156c0 8.533 3.534 10.844 14.845 10.844h36.229l1.06 1.067v8.178l-.884 1.245H1.926s-1.237.71-1.237.889c.883 6.044 4.948 7.644 14.668 7.644h37.112c11.31 0 15.022-2.133 15.022-10.844v-6.223c.177-8.534-3.534-10.845-14.845-10.845M421.29 26.923h-20.675l-1.07 2.032L422.36 44.87c4.277-2.37 9.09-4.74 14.08-7.111M439.431 58.147L459.09 72.79h20.354l.87-1.964-29.227-21.967c-4 3.036-8.002 6.072-11.656 9.287"/>
                      <path fill="#A7A9AC" d="M417.865 72.791h-18.71l-1.604-2.497C410.203 57.984 466.87 5.53 590 0c0 0-103.174 3.568-172.135 72.791"/>
                  </g>
              </svg>
            </a>
            <h1 className="launches-list__title">Launches 2018</h1>
          </div>
        <FilterButtons
          options={availableRocketNames}
          onChange={this.handleFilterChange}
        />
        </section>
        {isLoading ?
          <div className='sweet-loading'>
            <RingLoader
              color={'#FFF'}
              loading={isLoading}
            />
          </div>
          :
          error ?
          <div className='list__error'>
            <span className="list__error-text">Sorry, no launches found</span>
          </div>
          :
          <List className="list"
            onLaunchClick={this.props.onLaunchClick}
            launches={launches}
          />}
        </section>
    );
  }
}

export default LaunchesList;