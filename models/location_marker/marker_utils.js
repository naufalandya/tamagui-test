// markerUtils.js

const getMarkerImage = (type) => {
    switch (type) {
      case 'plta':
        return 'assets/plta.png';
      case 'plts':
        return 'assets/plts.png';
      case 'pltb':
        return 'assets/pltb.png';
      case 'pltu':
        return 'assets/pltu.png';
      default:
        return 'assets/plta.png'; // default image
    }
  };
  
  const getMarkerSize = (type) => {
    // Customize marker size based on type
    switch (type) {
      case 'plta':
      case 'plts':
      case 'pltb':
      case 'pltu':
        return 40.0;
      default:
        return 40.0;
    }
  };
  
  export { getMarkerImage, getMarkerSize };
  