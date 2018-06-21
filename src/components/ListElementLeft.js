import React from 'react';
import { format } from 'date-fns';
import { en } from 'date-fns/locale/en';

import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';

@inject('MainStore')
@observer
class ListElementLeft extends React.Component {

@action.bound
func = () => {
  this.props.MainStore.openedDetails(this.props);
}

  render() {
    const { rocketList, key, location, date, onLaunchClick } = this.props;
    const formatedDate = format(date, 'DD MMMM YYYY', {locale: en})
    return (
        	<div
          className="list-element"
          onClick={this.func}>
                <div onClick={onLaunchClick} className="list-element__container">
                    <h1 className="list-element__title">{formatedDate}</h1>
                    <div className="list-element__body">
                      <div className="list-element__specification">
                        <ul>
                           <li>rocket:  </li>
                           <li
                           className="list-element__rocket-element"
                           key={rocketList}>
                           {rocketList}</li>
                        </ul>
                      </div>
                      <div className="list-element__location">
                        <ul>
                           <li key="{location}">launch site: </li>
                           <li className="list-element__location-element">
                            {location}
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="list-element--empty">
                </div>
            </div>
    );
  }
}
export default ListElementLeft;