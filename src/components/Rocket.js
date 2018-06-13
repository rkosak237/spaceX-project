import React from 'react';
import './../styles/_Rocket.sass';

class Rocket extends React.Component {

  render() {
    return (
      <section className="rocket__container">
        <h1 className="rocket__title"> Rocket </h1>
        <div className="rocket__copyContainer">
          <div className="rocket__specification">
            <ul>
              <li key="name">name: <span>{this.props.name}</span></li>
              <li key="company">company: <span>{this.props.company}</span></li>
              <li key="height">height: <span> {this.props.height.meters}M /
              {this.props.height.feet}FT
              </span></li>
              <li key="diameter">diameter: <span>{this.props.diameter.meters}M /
                {this.props.diameter.feet}FT
                </span>
              </li>
              <li key="mass">mass: <span>{this.props.mass.kg}KG /
              {this.props.mass.lb}LB</span></li>
            </ul>
          </div>

          <div className="rocket__stats">
            <ul>
                <li key="first-flight">first flight: <span>{this.props.first_flight}</span></li>
                <li key="country">country: <span>{this.props.country}</span></li>
                <li key="success-rate">success rate: <span>{this.props.success_rate}%</span></li>
                <li key="cost">cost per launch: <span> ${this.props.cost}</span></li>
              </ul>
          </div>
        </div>
          <p>{this.props.description}</p>
      </section>
    );
  }
}

export default Rocket;
