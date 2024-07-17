// src/components/BoundingBox.js

import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const BoundingBox = ({ predictions, imageWidth, imageHeight, scale }) => (
  <Svg height={imageHeight * scale} width={imageWidth * scale} style={{ position: 'absolute', top: 0, left: 0 }}>
    {predictions.map((pred, index) => (
      <React.Fragment key={index}>
        <Rect
          x={pred.x * scale - (pred.width * scale) / 2}
          y={pred.y * scale - (pred.height * scale) / 2}
          width={pred.width * scale}
          height={pred.height * scale}
          stroke="red"
          strokeWidth="2"
          fill="none"
        />
        <SvgText
          x={pred.x * scale - (pred.width * scale) / 2}
          y={pred.y * scale - (pred.height * scale) / 2 - 5}
          fill="red"
          fontSize="14"
          fontWeight="bold"
        >
          {`${pred.class} (${(pred.confidence * 100).toFixed(2)}%)`}
        </SvgText>
      </React.Fragment>
    ))}
  </Svg>
);

export default BoundingBox;
