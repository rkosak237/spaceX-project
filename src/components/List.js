import React from 'react';
import ListElementLeft from './../components/ListElementLeft';
import ListElementRight from './../components/ListElementRight';


class List extends React.Component {

  render() {
    const { launches } = this.props;
    const RocketsList = launches.sort((a, b) => b.flight_number - a.flight_number);
    console.log(RocketsList);
    return (

        	<div className="list">
                {RocketsList.map(side => 
                    side.flight_number %2 ?
                    <ListElementRight
                        date={side.launch_date_local}
                        key={side.flight_number}
                        rocketList={side.rocket.rocket_name}
                        location={side.launch_site.site_name_long}
                    />
                    :
                    <ListElementLeft
                        date={side.launch_date_local}
                        key={side.flight_number}
                        rocketList={side.rocket.rocket_name}
                        location={side.launch_site.site_name_long}
                    />
                    )
                }
        	</div>
    );
  }
}
export default List;