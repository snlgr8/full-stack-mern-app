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
      x: 'Lipstick',
      y: 10,
    },
    {
      x: 'Nailpaint',
      y: 19,
    },
    {
      x: 'Lipstick2',
      y: 10,
    },
    {
      x: 'Nailpaint2',
      y: 19,
    },
    {
      x: 'Lipstick3',
      y: 10,
    },
    {
      x: 'Nailpaint3',
      y: 19,
    },
  ];

  return (
    <>
      <h1>This is reports</h1>
      <FlexibleWidthXYPlot xType='ordinal' height={400}>
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={categoryData} barWidth={0.5} />
      </FlexibleWidthXYPlot>
    </>
  );
};
