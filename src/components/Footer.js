import React from 'react';
import PropTypes from 'prop-types';
// import './../styles/_Footer.sass';


class Footer extends React.Component {


  render() {

    return (
        <footer>
        	<div className="Container_footer">
	        	<div className="links__container"> 
		          <a src="#">follow spaceX</a>
		          <a src="#">twitter</a>
		          <a src="#">youtube</a>
		          <a src="#">flickr</a>
		          <a src="#">instagram</a>
	         	</div>
				<p>2018 space exploration technologies corp.</p>
        	</div>
        </footer>
    );
  }
}
export default Footer;