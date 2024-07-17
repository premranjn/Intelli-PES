// src/components/ResetButton.js

import React from 'react';
import { Button } from 'react-native';

const ResetButton = ({ onPress }) => (
  <Button title="Reset" onPress={onPress} />
);

export default ResetButton;
