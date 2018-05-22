import React from 'react';
import ListElementLeft from './../components/ListElementLeft';
import ListElementRight from './../components/ListElementRight';

class List extends React.Component {

  render() {
    return (
        	<div className="list">
                <ListElementLeft />
                <ListElementRight />
                <ListElementLeft />
                <ListElementRight />
                <ListElementLeft />
                <ListElementRight />
                <ListElementLeft />
                <ListElementRight />

        	</div>
    );
  }
}
export default List;