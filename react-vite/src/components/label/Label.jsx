import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import StyledLabel from './styles';

const Label = forwardRef(({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
  const theme = useTheme();

  const iconStyle = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  };

  return (
    <StyledLabel
      ref={ref}
      component="span"
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
      theme={theme}
      {...other}
    >
      {startIcon && (
      <Box sx={{ mr: 0.75, ...iconStyle }}>
        {' '}
        {startIcon}
        {' '}
      </Box>
      )}

      {children}

      {endIcon && (
      <Box sx={{ ml: 0.75, ...iconStyle }}>
        {' '}
        {endIcon}
        {' '}
      </Box>
      )}
    </StyledLabel>
  );
});

Label.propTypes = {
  sx: PropTypes.object.isRequired,
  endIcon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'soft']).isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']).isRequired,
};

export default Label;
