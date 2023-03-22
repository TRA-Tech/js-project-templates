/* Example Component */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <h2>{text}</h2>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Hello World!',
};

export default Header;
