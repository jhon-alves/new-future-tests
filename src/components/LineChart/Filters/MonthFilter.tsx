import React from 'react';
import { SegmentedButtons } from 'react-native-paper';

export const MonthFilter = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <SegmentedButtons
      density="small"
      value={selectedFilter}
      onValueChange={setSelectedFilter}
      style={{paddingHorizontal: 0}}
      buttons={[
        {
          value: 'ONEMONTH',
          label: '1 mês',
          checkedColor: '#FFF',
          style: {
            paddingHorizontal: 0,
            paddingVertical: 0,
            backgroundColor:
              selectedFilter === 'ONEMONTH' ? '#25A7DB' : 'transparent'
          }
        },
        {
          value: 'THREEMONTH',
          label: '3 meses',
          checkedColor: '#FFF',
          style: {
            paddingHorizontal: 0,
            paddingVertical: 0,
            backgroundColor:
              selectedFilter === 'THREEMONTH' ? '#25A7DB' : 'transparent'
          }
        },
        {
          value: 'SIXMONTH',
          label: '6 meses',
          checkedColor: '#FFF',
          style: {
            backgroundColor:
              selectedFilter === 'SIXMONTH' ? '#25A7DB' : 'transparent'
          }
        },
        {
          value: 'ONEYEAR',
          label: '1 ano',
          checkedColor: '#FFF',
          style: {
            backgroundColor:
              selectedFilter === 'ONEYEAR' ? '#25A7DB' : 'transparent'
          }
        }
      ]}
    />
  );
}
