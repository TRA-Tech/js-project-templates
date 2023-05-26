import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import React from 'react';
import CssStyleUtilities from '../../../utilities/CssStyle';
import Iconify from '../../../components/iconify/Iconify';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...CssStyleUtilities.bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const Header = ({ onOpenNav }) => (
  <StyledRoot>
    <StyledToolbar>
      <IconButton
        onClick={onOpenNav}
        sx={{
          mr: 1,
          color: 'text.primary',
          display: { lg: 'none' },
        }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Searchbar />
      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={{
          xs: 0.5,
          sm: 1,
        }}
      >
        <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </StyledToolbar>
  </StyledRoot>
);

Header.propTypes = {
  onOpenNav: PropTypes.func.isRequired,
};

export default Header;
