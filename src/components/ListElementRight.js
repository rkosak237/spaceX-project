import React from 'react';
import { format } from 'date-fns';
import { en } from 'date-fns/locale/en';

class ListElementRight extends React.Component {

  render() {
    const { rocketList, key, location, date } = this.props;
    const formatedDate = format(date, 'DD MMMM YYYY', {locale: en})
    return (
        	<div className="ListElement ListElement__container">
                <div className="ListElement--empty">
                </div>
                <div className="ListElement ListElement__wraper">
                    <h1 className="ListElement ListElement__title right">{formatedDate}</h1>
                    <div className="ListElement ListElement__copyContainer--right"> 
                      <div className="ListElement ListElement__specification">
                        <ul>
                          <li key="{rocketList}">rocket:  </li>
                          <li className="specification_results" key="{rocketList}">{rocketList}</li>
                        </ul>
                      </div>
                      <div className="ListElement__stats"> 
                      <ul>
                        <li key="{location}">launch site: </li>
                        <li className="specification_results" key="location-name__results">{location}
                        </li>
                      </ul>
                      </div>
                    </div>
                </div>
            </div>
    );
  }
}
export default ListElementRight;
