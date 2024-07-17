// src/components/ImageViewer.js

import React from 'react';
import { Image } from 'react-native';

const ImageViewer = ({ imageUri, width }) => (
  <Image source={{ uri: imageUri }} style={{ width, height: 'auto', aspectRatio: 1 }} />
);

export default ImageViewer;
