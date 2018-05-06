import React from 'react';

class Rocket extends React.Component {

  render() {
    return (
      <div className="rocket__container">
        <h1 className="rocket__title"> Rocket </h1>
        <div className="rocket__copyContainer"> 
          <div className="rocket__specification"> 
            <ul>
              <li>name: <span>{this.props.name}</span></li>
              <li>company: <span>{this.props.company}</span></li>
              <li>height: <span> {this.props.height.meters}M / 
              {this.props.height.feet}FT
              </span></li>
              <li>diameter: 
                <span>{this.props.diameter.meters}M / 
                {this.props.diameter.feet}FT
                </span>
              </li>
              <li>diameter: <span>{this.props.mass.kg}KG / 
              {this.props.mass.lb}LB</span></li>
            </ul>
          </div>

          <div className="rocket__stats"> 
            <ul>
                <li>first flight: <span>{this.props.first_flight}</span></li>
                <li>country: <span>{this.props.country}</span></li>
                <li>success rate: <span>{this.props.success_rate}%</span></li>
                <li>cost per launch: <span> ${this.props.cost}</span></li>
              </ul>
          </div>
        </div>
          <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Rocket;
