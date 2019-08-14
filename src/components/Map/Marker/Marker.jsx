import React from 'react';
import PropTypes from 'prop-types';

import MarkerStyles from './MarkerStyles';

const Marker = ({ text }) => {
  return <div style={MarkerStyles}>{text}</div>;
};

Marker.propTypes = {};

export default Marker;
