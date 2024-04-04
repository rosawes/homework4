import React from 'react';

export const svgShapes = {
    0: <svg viewBox="0 0 100 100">
        <circle fill="red" r="30" cx="50%" cy="50%" /></svg>,
    1: <svg viewBox="0 0 100 100">
        <circle fill="blue" r="30" cx="50%" cy="50%" /></svg>,
    2: <svg viewBox="0 0 100 100">
        <circle fill="green" r="30" cx="50%" cy="50%" /></svg>,
    3: <svg viewBox="0 0 100 100">
        <rect fill="red" height="60" width="60" rx="5" x="20" y="20" /></svg>,
    4: <svg viewBox="0 0 100 100">
        <rect fill="blue" height="60" width="60" rx="5" x="20" y="20" /></svg>,
    5: <svg viewBox="0 0 100 100">
        <rect fill="green" height="60" width="60" rx="5" x="20" y="20" /></svg>,
    6: <svg viewBox="0 0 100 100">
        <polygon fill="orange" points="50,15 80,80 20,80" /></svg>,
    7: <svg viewBox="0 0 100 100">
        <polygon fill="black" points="50,10 90,50 50,90 10,50" /></svg>, 
    8: <svg viewBox="0 0 100 100">
        <polygon fill="red" points="50,15 80,80 20,80" /></svg>,
    9: <svg viewBox="0 0 100 100">
        <polygon fill="green" points="50,15 80,80 20,80" /></svg>,
    10: <svg viewBox="0 0 100 100">
        <polygon fill="blue" points="50,10 90,50 50,90 10,50" /></svg>,
    11: <svg viewBox="0 0 100 100">
        <circle fill="orange" r="30" cx="50%" cy="50%" /></svg>,
    12: <svg viewBox="0 0 100 100">
        <circle fill="black" r="30" cx="50%" cy="50%" /></svg>,
    13: <svg viewBox="0 0 100 100">
        <rect fill="orange" height="60" width="60" rx="5" x="20" y="20" /></svg>,
    14: <svg viewBox="0 0 100 100">
        <rect fill="black" height="60" width="60" rx="5" x="20" y="20" /></svg>,
};

export const boardSizes = {
  small: { rows: 3, cols: 4 },
  medium: { rows: 4, cols: 6 },
  large: { rows: 5, cols: 6 },
};