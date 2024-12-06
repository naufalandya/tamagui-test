import { useState, useEffect } from 'react';

// Custom Hook untuk mengelola data Donut Chart
const useDonutChartController = () => {
  const [chartData, setChartData] = useState([]);

  // Sama seperti `onInit` di Flutter
  useEffect(() => {
    updateChartData();
  }, []);

  // Fungsi untuk memperbarui data chart
  const updateChartData = () => {
    setChartData([
      {
        name: 'Group 1',
        percentage: 40,
        color: 'rgba(70, 140, 206, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Group 2',
        percentage: 30,
        color: 'rgba(135, 206, 235, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Group 3',
        percentage: 15,
        color: 'rgba(190, 235, 255, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Group 4',
        percentage: 15,
        color: 'rgba(12, 83, 206, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ]);
  };

  return { chartData };
};

export default useDonutChartController;
