import React from 'react';

export const svgShapes = {
    0: <circle fill="red" r="30" cx="50%" cy="50%" />,
    1: <circle fill="blue" r="30" cx="50%" cy="50%" />,
    2: <circle fill="green" r="30" cx="50%" cy="50%" />,
    3: <rect fill="red" height="60" width="60" rx="5" x="20" y="45" />,
    4: <rect fill="blue" height="60" width="60" rx="5" x="20" y="45" />,
    5: <rect fill="green" height="60" width="60" rx="5" x="20" y="45" />,
    6: <polygon fill="orange" points="50,15 80,80 20,80" />,
    7: <polygon fill="black" points="50,10 90,50 50,90 10,50" />, 
    8: <polygon fill="red" points="50,15 80,80 20,80" />,
    9: <polygon fill="green" points="50,15 80,80 20,80" />,
    10: <polygon fill="blue" points="50,10 90,50 50,90 10,50" />,
    11: <circle fill="orange" r="30" cx="50%" cy="50%" />,
    12: <circle fill="black" r="30" cx="50%" cy="50%" />,
    13: <rect fill="orange" height="60" width="60" rx="5" x="20" y="20" />,
    14: <rect fill="black" height="60" width="60" rx="5" x="20" y="20" />,
};

export const boardSizes = {
  small: { rows: 3, cols: 4 },
  medium: { rows: 4, cols: 6 },
  large: { rows: 5, cols: 6 },
};