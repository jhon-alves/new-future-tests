import React, { useState } from 'react';
import moment from 'moment';
import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryContainer,
  VictoryCursorContainer
} from 'victory-native';
import { lineStyle, tooltipStyle, axisGridStyle, axisDateStyle } from './data';

export const LineChart = ({ rentability }) => {
  const datePosition = rentability.Cliente.map(({ DataPosicao }) => moment(DataPosicao).format('DD MMM'));
  const [tickValues] = useState([
    datePosition[0],
    datePosition[Math.floor(datePosition.length / 2)],
    datePosition[datePosition.length - 1]
  ]);

  return (
    <VictoryChart
      height={300}
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryCursorContainer
          cursorDimension="x"
          cursorLabel={({datum}) => `${(datum.y * 100).toFixed(2)}%`}
          cursorLabelComponent={
            <VictoryTooltip
              constrainToVisibleArea
              cornerRadius={3}
              pointerLength={0}
              renderInPortal={false}
              flyoutStyle={tooltipStyle}
              centerOffset={{x: 30, y: -8}}
              style={{fill: '#fff', fontWeight: 'bold'}}
              flyoutPadding={{top: 5, bottom: 5, left: 10, right: 10}}
            />
          }
        />
      }>
      <VictoryContainer>
        <VictoryLine
          height={280}
          standalone={false}
          interpolation="natural"
          data={rentability.Cliente}
          x="DataPosicao"
          y={item => item.Rentabilidade}
          style={lineStyle}
          animate={{
            duration: 2000,
            onLoad: {duration: 1000}
          }}
        />
        <VictoryAxis dependentAxis standalone={false} style={axisGridStyle} />
        <VictoryAxis
          crossAxis
          tickCount={2}
          standalone={false}
          tickValues={tickValues}
          style={axisDateStyle}
        />
      </VictoryContainer>
    </VictoryChart>
  );
};
