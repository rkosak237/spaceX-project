import React from 'react';
import PropTypes from 'prop-types';
import './../styles/_Content.sass';

class Content extends React.Component {


  render() {

    return (
    	<section className="Content_section">
	        <div className="Content_wrapper">
	        	<h1>mission links</h1>
		        <div className="wrapper__buttons">
		 			<button className="content_buttons">reddit campaign</button>
		        	<button className="content_buttons">presskit</button>
		        	<button className="content_buttons">mission video</button>
		        </div>
	        </div>
        </section>
    );
  }
}
export default Content;