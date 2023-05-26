import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = ({ disabledLink = false, sx, ...other }) => {
  const logo = (
    <Box
      component="img"
      src="/assets/logos/tra-bilisim-logo.svg"
      sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
      {...other}
    />
  );

  if (disabledLink) {
    return { logo };
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
};

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

Logo.defaultProps = {
  disabledLink: false,
  sx: undefined,
};

export default Logo;
