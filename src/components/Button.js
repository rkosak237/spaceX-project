import * as React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	static propTypes = {
    buttonText: PropTypes.string.isRequired,
  }

  render() {
	const { buttonText, link } = this.props;
    return (
    	<button onClick={this.props.onClick}>{ buttonText }</button>
    );
  }
}
export default Button;