import React from 'react';
import Lily from './Lily';
import Tulip from './Tulip';
import Rose from './Rose';
import Daisy from './Daisy';
import CherryBlossom from './CherryBlossom';
import Sunflower from './Sunflower';

export interface Flower {
  id: number;
  name: string;
  icon: string;
  component: React.JSX.Element;
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
  { id: 0, name: "Lily", icon: "🌺", component: <Lily />},
  { id: 1, name: "Rose", icon: "🌷", component: <Rose />},
  { id: 2, name: "Tulip", icon: "🌹", component: <Tulip />},
  { id: 3, name: "Daisy", icon: "🌼", component: <Daisy />},
  { id: 4, name: "Sunflower", icon: "🌻", component: <Sunflower />},
  { id: 5, name: "Cherry Blossom", icon: "🌸", component: <CherryBlossom />},
];
