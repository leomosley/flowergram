import React from 'react';
import Lily from './Lily';

export interface Flower {
  id: number;
  name: string;
  component: ()=> React.JSX.Element;
}

export const colours: string[] = [
  "#5eead4", // teal-300
  "#8b5cf6", // violet-500
  "#ec4899", // pink-500
  "#10b981", // emerald-500
  "#e11d48", // rose-600
  "#fde68a", // amber-200
  "#f0fdf4", // green-50
  "#2563eb", // blue-600
  "#f9a8d4"  // pink-300
];

export const flowers: Flower[] = [
  { id: 0, name: "lily", component: Lily}
];
