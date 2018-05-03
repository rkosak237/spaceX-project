import React from 'react';
import PropTypes from 'prop-types';
// import './../styles/_Rocket.sass';

class Rocket extends React.Component {

  render() {
   

    return (
      <div className="rocket__container">
        <h1 className="rocket__title"> Rocket </h1>
        <div className="rocket__copyContainer"> 
          <div className="rocket__specification"> 
            <ul>
              <li>name:</li>
              <li>company:</li>
              <li>height:</li>
              <li>diameter:</li>
              <li>mass:</li>
            </ul>
          </div>

          <div className="rocket__stats"> 
            <ul>
                <li>first flight:</li>
                <li>country:</li>
                <li>success rate:</li>
                <li>cost per launch:</li>
              </ul>
          </div>
        </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt
          </p>
      </div>
    );
  }
}

export default Rocket;
