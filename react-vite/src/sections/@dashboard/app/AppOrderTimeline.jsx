import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
import React from 'react';
import format from 'date-fns/format';

const AppOrderTimeline = ({ title, subheader, list, ...other }) => (
  <Card {...other}>
    <CardHeader title={title} subheader={subheader} />
    <CardContent
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none',
        },
      }}
    >
      <Timeline>
        {list.map((item, index) => (
          <OrderItem key={item.id} item={item} isLast={index === list.length - 1} />
        ))}
      </Timeline>
    </CardContent>
  </Card>
);

AppOrderTimeline.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

AppOrderTimeline.defaultProps = {
  subheader: '',
};

export default AppOrderTimeline;

const OrderItem = ({ item, isLast }) => {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary')
            || (type === 'order2' && 'success')
            || (type === 'order3' && 'info')
            || (type === 'order4' && 'warning')
            || 'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {format(new Date(time), 'dd MMM yyyy p')}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

OrderItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
