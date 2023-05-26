import PropTypes from 'prop-types';
import { Box, Stack, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Iconify from '../../../components/iconify/Iconify';
import Scrollbar from '../../../components/scrollbar/Scrollbar';

const AppNewsUpdate = ({ title, subheader, list, ...other }) => (
  <Card {...other}>
    <CardHeader title={title} subheader={subheader} />

    <Scrollbar>
      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {list.map(news => (
          <NewsItem key={news.id} news={news} />
        ))}
      </Stack>
    </Scrollbar>

    <Divider />

    <Box sx={{ p: 2, textAlign: 'right' }}>
      <Button size="small" color="inherit" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
        View all
      </Button>
    </Box>
  </Card>
);

AppNewsUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

AppNewsUpdate.defaultProps = {
  subheader: '',
};

export default AppNewsUpdate;

const NewsItem = ({ news }) => {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Button color="inherit" variant="subtitle2" underline="hover">
          {title}
        </Button>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
      </Typography>
    </Stack>
  );
};

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }).isRequired,
};
