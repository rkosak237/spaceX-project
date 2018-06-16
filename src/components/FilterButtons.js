import * as React from 'react';
import Button from './Button';

import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';

@inject('MainStore')
@observer
class FilterButtons extends React.Component {
    constructor(props) {
    super(props);
  }
  handleClick(value, event) {
    this.props.onChange(value);
  }
  render() {
    const { availableRocketNames } = this.props.MainStore;

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