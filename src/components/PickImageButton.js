// src/components/PickImageButton.js

import React from 'react';
import { Button } from 'react-native';

const PickImageButton = ({ onPress }) => (
  <Button title="Pick my crop from gallery" onPress={onPress} />
);

export default PickImageButton;
