import React from 'react';
import { CardGraph } from './styles';
import { mockFilter } from './mockFilter';
import { LineChart, MonthFilter } from '../../components';
import { useLineChartFilter } from './hooks/useLineChartFilter';

export const GraphScreen = () => {
  const { selectedFilter, setSelectedFilter } = useLineChartFilter();

  return (
    <CardGraph>
      <MonthFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <LineChart rentability={mockFilter} />
    </CardGraph>
  );
};
