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
    const filterButtons = this.props.options.map(option =>
            <Button
            key={option}
            buttonText={option}
            onClick = {e => this.handleclick(option, e)}/>);
    return (
            <div className="wrapper__buttons">
                <Button buttonText="All Rockets" onClick={e => this.handleClick('', e)} />
            {filterButtons}
            </div>
    );
  }
}
export default FilterButtons;