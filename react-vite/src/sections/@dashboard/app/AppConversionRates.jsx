import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { Box, Card, CardHeader } from '@mui/material';
import React from 'react';
import numeral from 'numeral';
import { useChart } from '../../../components/chart';

const AppConversionRates = ({ title, subheader, chartData, ...other }) => {
  const chartLabels = chartData.map(i => i.label);

  const chartSeries = chartData.map(i => i.value);

  const chartOptions = useChart({
    tooltip: {
      marker: { show: false },
      y: {
        formatter: seriesName => numeral(seriesName).format(),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
};

AppConversionRates.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
};

export default AppConversionRates;
