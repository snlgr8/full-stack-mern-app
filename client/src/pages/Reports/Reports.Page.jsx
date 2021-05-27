import React from 'react';
import {
  FlexibleXYPlot,
  FlexibleHeightXYPlot,
  FlexibleWidthXYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  XYPlot,
} from 'react-vis';

import './Reports.css';

export const ReportsPage = () => {
  const categoryData = [
    {
      x: 'Cat1',
      y: 10,
    },
    {
      x: 'Cat2',
      y: 19,
    },
    {
      x: 'Cat3',
      y: 10,
    },
    {
      x: 'Cat4',
      y: 19,
    },
    {
      x: 'Cat5',
      y: 10,
    },
    {
      x: 'Cat6',
      y: 19,
    },
  ];

  return (
    <>
      <div className='report-title'>
        <h3>Data analysis</h3>
      </div>
      <FlexibleWidthXYPlot xType='ordinal' height={400}>
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={categoryData} barWidth={0.5} />
      </FlexibleWidthXYPlot>
    </>
  );
};
