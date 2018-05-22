import React from 'react';
class Content extends React.Component {


  render() {

    return (
    	<section className="Content-section">
	        <div className="Content-wrapper">
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