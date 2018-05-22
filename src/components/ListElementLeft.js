import React from 'react';
class ListElementLeft extends React.Component {

  render() {
    return (
        	<div className="ListElement ListElement__container">
                <div className="ListElement ListElement__wraper">
                    <h1 className="ListElement ListElement__title">28 april 2018</h1>
                    <div className="ListElement ListElement__copyContainer"> 
                      <div className="ListElement ListElement__specification">
                        <ul>
                          <li key="launchPad-name">rocket:  </li>
                          <li className="specification_results" key="launchPad-name__results">falcon9</li>
                        </ul>
                      </div>
                      <div className="ListElement__stats"> 
                      <ul>
                        <li key="location">launch site: </li>
                        <li className="specification_results" key="location-name__results">kwajalein atoll omelek island
                        </li>
                      </ul>
                      </div>
                    </div>
                </div>
                <div className="ListElement--empty">
                </div>
            </div>
    );
  }
}
export default ListElementLeft;