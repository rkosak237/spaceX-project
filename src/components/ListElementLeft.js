import React from 'react';
import { format } from 'date-fns';
import { en } from 'date-fns/locale/en';

class ListElementLeft extends React.Component {

  render() {
    const { rocketList, key, location, date, onLaunchClick } = this.props;
    const formatedDate = format(date, 'DD MMMM YYYY', {locale: en})
    return (
        	<div className="ListElement ListElement__container">
                <div onClick={onLaunchClick} className="ListElement ListElement__wraper">
                    <h1 className="ListElement ListElement__title">{formatedDate}</h1>
                    <div className="ListElement ListElement__copyContainer"> 
                      <div className="ListElement ListElement__specification">
                        <ul>
                           <li>rocket:  </li>
                           <li className="specification_results" key={rocketList}>{rocketList}</li>
                        </ul>
                      </div>
                      <div className="ListElement__stats"> 
                      <ul>
                         <li key={location}>launch site: </li>
                         <li className="specification_results">{location}
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