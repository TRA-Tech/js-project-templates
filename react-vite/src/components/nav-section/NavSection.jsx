import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, List, ListItemText } from '@mui/material';
import React from 'react';
import { StyledNavItem, StyledNavItemIcon } from './styles';

const NavSection = ({ data, ...other }) => (
  <Box {...other}>
    <List disablePadding sx={{ p: 1 }}>
      {data.map(item => (
        <NavItem key={item.title} item={item} />
      ))}
    </List>
  </Box>
);

NavSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default NavSection;

const NavItem = ({ item }) => {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};
