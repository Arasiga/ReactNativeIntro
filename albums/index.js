/**
 * @format
 */

// Import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header />
);

// Attempt to render the component to the device
AppRegistry.registerComponent('albums', () => App);
