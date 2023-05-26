import PropTypes from 'prop-types';
import { Box, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
import React from 'react';
import numeral from 'numeral';

const AppTrafficBySite = ({ title, subheader, list, ...other }) => (
  <Card {...other}>
    <CardHeader title={title} subheader={subheader} />

    <CardContent>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {list.map(site => (
          <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
            <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

            <Typography variant="h6">{numeral(site.value).format('0.00a')}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {site.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </CardContent>
  </Card>
);

AppTrafficBySite.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

AppTrafficBySite.defaultProps = {
  subheader: '',
};

export default AppTrafficBySite;
