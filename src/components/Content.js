import React from 'react';
class Content extends React.Component {


  render() {

    return (
    	<section className="content__section">
	        <div className="content__container">
	        	<h1 className="content__title">mission links</h1>
		        <div className="content__buttons-container">
		 			<button className="content__button">reddit campaign</button>
		        	<button className="content__button">presskit</button>
		        	<button className="content__button">mission video</button>
		        </div>
	        </div>
        </section>
    );
  }
}
export default Content;