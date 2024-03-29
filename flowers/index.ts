import React from 'react';
import Lily from './Lily';
import Tulip from './Tulip';
import Rose from './Rose';
import Daisy from './Daisy';
import Orchid from './Orchid';
import Azalea from './Azalea';

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
  { id: 0, name: "lily", component: Lily},
  { id: 1, name: "tulip", component: Rose},
  { id: 2, name: "rose", component: Tulip},
  { id: 3, name: "dasiy", component: Daisy},
  { id: 4, name: "azalea", component: Azalea},
  { id: 5, name: "orchid", component: Orchid},
];
