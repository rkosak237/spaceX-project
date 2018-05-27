import * as React from 'react';
import Button from './Button';

class FilterButtons extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value, event) {
    this.props.onChange(value);
  };


  render() {
    const { options } = this.props;
    const filterButtons = options.map(option =>
            <Button
              key={option}
              buttonText={option}
              onClick = {e => this.handleClick(option, e)}
            />);
    return (
            <div className="wrapper__buttons">
            {options.map((option) =>
            <Button
              key={option}
              buttonText={option}
              onClick = {e => this.handleClick(option, e)}
            />)}
          </div>
    );
  }
}
export default FilterButtons;