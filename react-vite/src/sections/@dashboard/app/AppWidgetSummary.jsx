import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import React from 'react';
import numeral from 'numeral';
import Iconify from '../../../components/iconify/Iconify';

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

const AppWidgetSummary = ({ title, total, icon, color, sx, ...other }) => (
  <Card
    sx={{
      py: 5,
      boxShadow: 0,
      textAlign: 'center',
      color: theme => theme.palette[color].darker,
      bgcolor: theme => theme.palette[color].lighter,
      ...sx,
    }}
    {...other}
  >
    <StyledIcon
      sx={{
        color: theme => theme.palette[color].dark,
        backgroundImage: theme => `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
          theme.palette[color].dark,
          0.24,
        )} 100%)`,
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </StyledIcon>

    <Typography variant="h3">{numeral(total).format('0.00a')}</Typography>

    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
      {title}
    </Typography>
  </Card>
);

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

AppWidgetSummary.defaultProps = {
  color: 'primary',
  sx: undefined,
};

export default AppWidgetSummary;
