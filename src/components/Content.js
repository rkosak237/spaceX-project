import React from 'react';
import PropTypes from 'prop-types';


class Content extends React.Component {


  render() {

    return (
        <div className="Content_wrapper">
        <h1>mission links</h1>
	        <div className="wrapper__buttons">
	 			<button>reddit campaign</button>
	        	<button>presskit</button>
	        	<button>mission video</button>
	        </div>
        </div>
    );
  }
}
export default Content;