import React from 'react';
import Lily from './Lily';

export interface Flower {
  id: number;
  name: string;
  component: ()=> React.JSX.Element;
}

export const colours: string[] = [
  "#FF69B4", // Hot Pink
  "#FFD700", // Gold
  "#FF6347", // Tomato
  "#00FF00", // Lime
  "#800080", // Purple
  "#FF4500", // Orange Red
  "#DA70D6", // Orchid
  "#FFFF00", // Yellow
  "#FFA500"  // Orange
];

export const flowers: Flower[] = [
  { id: 0, name: "lily", component: Lily}
];
