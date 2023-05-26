import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import React from 'react';
import numeral from 'numeral';
import { useChart } from '../../../components/chart';

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const StyledChartWrapper = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

const AppCurrentVisits = ({ title, subheader, chartColors, chartData, ...other }) => {
  const theme = useTheme();

  const chartLabels = chartData.map(i => i.label);

  const chartSeries = chartData.map(i => i.value);

  const chartOptions = useChart({
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: seriesName => numeral(seriesName).format(),
        title: {
          formatter: seriesName => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <StyledChartWrapper dir="ltr">
        <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={280} />
      </StyledChartWrapper>
    </Card>
  );
};

AppCurrentVisits.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  chartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartData: PropTypes.array.isRequired,
};

AppCurrentVisits.defaultProps = {
  subheader: undefined,
};

export default AppCurrentVisits;
