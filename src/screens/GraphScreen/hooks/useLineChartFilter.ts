import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { financesServices } from '../../../services';
import {
  formatDate,
  today,
  beforeMonth,
  threeMonth,
  sixMonth,
  oneYear
} from '../../../utils/formatDate';

export const useLineChartFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ONEMONTH');
  // const filterOne = selectedFilter === 'ONEMONTH' ? beforeMonth : undefined;
  // const filterThree = selectedFilter === 'THREEMONTH' ? threeMonth : undefined;
  // const filterSix = selectedFilter === 'SIXMONTH' ? sixMonth : undefined;
  // const filterOneYear = selectedFilter === 'ONEYEAR' ? oneYear : undefined;

  // const { mutate, data, isLoading } = useMutation({
  //   mutationFn: () => financesServices.getRentabilityConsolidated()
  // });

  // function handleChangeFilter(value: string) {
  //   ['ONEMONTH', 'THREEMONTH', 'SIXMONTH', 'ONEYEAR'].includes(value) &&
  //     mutate({
  //       DataInicio: formatDate(
  //         filterOne ?? filterThree ?? filterSix ?? filterOneYear ?? beforeMonth
  //       ),
  //       DataFim: formatDate(today)
  //     });
  // }

  return {
    // isLoading,
    // mutate,
    // data,
    selectedFilter,
    setSelectedFilter,
    // handleChangeFilter
  };
};
