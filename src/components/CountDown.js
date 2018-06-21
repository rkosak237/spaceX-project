import * as React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import format from "date-fns/format";

function getTimeDiff({to, today}) {
	return (to - today);
}

class CountDown extends React.PureComponent {
	counterInterval

  state = {
    secondsLeft: getTimeDiff(this.props),
    active: false,
  }

  componentDidMount() {
    this.togglePlay();
  }


  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }

 rocketLaunched = () => {this.secondsLeft <=0;}

  start = () => {
    this.counterInterval = setInterval(this.tick, 1000)
  }

  tick = () => {
    const { secondsLeft } = this.state
    const newState = {
      secondsLeft: secondsLeft - 1,
    }
    if (newState.secondsLeft === 0) {
      newState.active = false
      this.stop()
    }
    this.setState(newState)
  }

  stop = () => {
    clearInterval(this.counterInterval)
  }


  togglePlay = () => {
    const { active, secondsLeft } = this.state
    if(secondsLeft !== 0){
      this.setState({ active: !active })
      if (active) {
        this.stop()
      } else {
        this.start()
      }
    }
  }

	renderTimeLabel = () => {
	    const { active, secondsLeft } = this.state

	    const date = new Date(0)
	    date.setSeconds(secondsLeft)
	    const sec = Math.floor(date /1000) % 60;
	    const min = Math.floor(date/(1000*60)) % 60;
	    const hrs = Math.floor(date/(1000*60*60)) % 24;
	    const days = Math.floor(date/(1000*60*60*24)) % 24;
	    if (date > 0) {
	    return <p>{days} DAYS {hrs} HRS {min} MINS {sec} SEC TO START</p>

	    } else {
	      return <p>{Math.abs(days)} DAYS {Math.abs(hrs)} HRS {Math.abs(min)} MINS {Math.abs(sec)} SEC SINCE START</p>
	 	}
	 }

  render() {
      return (
        <div>
        {!this.rocketLaunched() ?
        <span>{this.renderTimeLabel()}</span>
        :
        <p>Rocket was launched {this.props.to}</p>
        }
      </div>
    );
  }
}
CountDown.propTypes = {
  today: PropTypes.number,
  to: PropTypes.number,
  onSuccess: PropTypes.func,
}

export default CountDown;