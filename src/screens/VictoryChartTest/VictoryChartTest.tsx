import { View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
]

export const VictoryChartTest = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VictoryChart
        domainPadding={{ y: 10 }}
        padding={{ left: 0, top: 20, right: 0, bottom: 0 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${Math.round(datum._x)}, ${Math.round(datum._y)}`}
          />
        }
      >
        <VictoryLine
          interpolation="natural"
          data={data}
          x="x"
          y="y"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 12 }}
              flyoutStyle={{ stroke: 'none', fill: '#FFF', padding: 5 }}
              flyoutPadding={{ top: 10, bottom: 10, left: 15, right: 15 }}
              cornerRadius={3}
            />
          }
        />
      </VictoryChart>
    </View>
  );
};
