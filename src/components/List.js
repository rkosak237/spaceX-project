import React from 'react';
import ListElementLeft from './../components/ListElementLeft';
import ListElementRight from './../components/ListElementRight';

import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';

@inject('MainStore')
@observer
class List extends React.Component {

  render() {
    const { launches } = this.props;
    const RocketsList = launches
    .map(x => x)
    .sort((a, b) => b.flight_number - a.flight_number);
    return (

        	<div id='list' className="list">
                {RocketsList.map(side =>
                    side.flight_number %2 ?
                    <ListElementRight
                        date={side.launch_date_local}
                        key={side.flight_number}
                        rocketList={side.rocket.rocket_name}
                        location={side.launch_site.site_name_long}
                        onLaunchClick={this.props.onLaunchClick}
                    />
                    :
                    <ListElementLeft
                        date={side.launch_date_local}
                        key={side.flight_number}
                        rocketList={side.rocket.rocket_name}
                        location={side.launch_site.site_name_long}
                        onLaunchClick={this.props.onLaunchClick}
                    />
                    )
                }
        	</div>
    );
  }
}
export default List;