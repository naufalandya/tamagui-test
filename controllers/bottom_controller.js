import { useState } from 'react';

// Custom Hook untuk mengelola state Bottom Navigation
const useBottomNavController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk mengganti halaman
  const changePage = (index) => {
    setCurrentIndex(index);
  };

  return { currentIndex, changePage };
};

export default useBottomNavController;
