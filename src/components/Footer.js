import React from 'react';


class Footer extends React.Component {


  render() {

    return (
        <footer className="footer__container">
        	<div className="footer__body">
	        	<div className="footer__links">
		          <a className="footer__link-element" src="#" alt="follow button">follow spaceX</a>
		          <a className="footer__link-element" src="#" alt="twitter profile">twitter</a>
		          <a className="footer__link-element" src="#" alt="youtube channel">youtube</a>
		          <a className="footer__link-element" src="#" alt="flickr profile">flickr</a>
		          <a className="footer__link-element" src="#" alt="instagram profile">instagram</a>
	         	</div>
				<p className="footer__text">2018 space exploration technologies corp.</p>
        	</div>
        </footer>
    );
  }
}
export default Footer;