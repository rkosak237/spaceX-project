import React from 'react';

class Details extends React.Component {
  render() {

    return (
      <section className="details__container">
        <h1 className="details__title"> Details</h1>
        <div className="details__text">
          <p>{this.props.details}</p>
        </div>
      </section>
    );
  }
}

export default Details;
