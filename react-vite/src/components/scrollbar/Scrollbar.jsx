import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Box } from '@mui/material';
import { StyledRootScrollbar, StyledScrollbar } from './styles';

const Scrollbar = ({ children, sx, ...other }) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
};

Scrollbar.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Scrollbar.defaultProps = {
  sx: undefined,
};

export default memo(Scrollbar);
