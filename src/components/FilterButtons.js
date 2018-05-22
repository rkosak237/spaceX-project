import * as React from 'react';
import Button from './Button';

class FilterButtons extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleClick(value, event) {
    this.props.onChange(value);
  };


  render() {
    return (
            <div className="wrapper__buttons">
              <button>all rockets</button>
              <button>falcon 1</button> 
              <button>falcon heavy</button> 
              <button>dragon</button> 
            </div>
    );
  }
}
export default FilterButtons;