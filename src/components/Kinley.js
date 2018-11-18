import React from 'react';
import PropTypes from 'prop-types';
import store from '../database';

const Kinley = ({ beverageDetails = store.database }) => beverageDetails.filter(beverage => beverage.name === 'Kinley').map(element => (
  <div>
    <img alt='Kinley' src={require( `../${element.largeimg}` )} />
    <h1>{element.name}</h1>
    <h2>{element.calories}</h2>
    <h3>{element.details}</h3>
  </div>
));

Kinley.propTypes = {
  beverageDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Kinley;