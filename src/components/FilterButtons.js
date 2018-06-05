import * as React from 'react';
import Button from './Button';

class FilterButtons extends React.Component {
    constructor(props) {
    super(props);
  }
  handleClick(value, event) {
    this.props.onChange(value);
  }
  render() {
    const { options, handleFilterChange } = this.props;
    const filterButtons = options.map(option =>
            <Button
              key={option}
              buttonText={option}
              onClick={e => this.handleClick(option, e)}
            />);
    return (
            <div className="filter-buttons__container">
            {filterButtons}
          </div>
    );
  }
}
export default FilterButtons;