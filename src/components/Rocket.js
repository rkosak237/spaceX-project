import React from 'react';
import './../styles/_Rocket.sass';

import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';
import { RingLoader } from 'react-spinners';

@inject('MainStore')
@observer
class Rocket extends React.Component {
  render() {
    const {rocketData} = this.props.MainStore;
    const {rocketsObj} = this.props.MainStore.rocketData;
    return (
      <section className="rocket__container">
        <h1 className="rocket__title"> Rocket </h1>

        { rocketData.isLoading ?
          <div className='sweet-loading'>
              <RingLoader
                color={'#FFF'}
                loading={rocketData.isLoading}
                />
              </div>
              : rocketData.isFailed ?
              <div className='list__error'>
                <span className="list__error-text">Sorry, no launches found</span>
              </div>
              :
        <div className="rocket__copyContainer">
          <div className="rocket__specification">
            <ul>
              <li key="name">name: <span>{rocketsObj.name}</span></li>
              <li key="company">company: <span>{rocketsObj.company}</span></li>
              <li key="height">height: <span> {rocketsObj.height.meters}M /
              {rocketsObj.height.feet}FT
              </span></li>
              <li key="diameter">diameter: <span>{rocketsObj.diameter.meters}M /
                {rocketsObj.diameter.feet}FT
                </span>
              </li>
              <li key="mass">mass: <span>{rocketsObj.mass.kg}KG /
              {rocketsObj.mass.lb}LB</span></li>
            </ul>
          </div>

          <div className="rocket__stats">
            <ul>
                <li key="first-flight">first flight: <span>{rocketsObj.first_flight}</span></li>
                <li key="country">country: <span>{rocketsObj.country}</span></li>
                <li key="success-rate">success rate: <span>{rocketsObj.success_rate}%</span></li>
                <li key="cost">cost per launch: <span> ${rocketsObj.cost}</span></li>
              </ul>
          </div>
        </div>}
          <p>{rocketsObj.description}</p>
      </section>
    );
  }
}

export default Rocket;
