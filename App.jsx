import React, { useState } from 'react';
import { View, Button, Image, Text, Dimensions } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const App = () => {
  const [imageUri, setImageUri] = useState(null);
  const [result, setResult] = useState(null);
  const { width: screenWidth } = Dimensions.get('window');

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  const sendImageToApi = async () => {
    if (!imageUri) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'crop.jpg',
    });

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://detect.roboflow.com/paddy-pmvaa/2',
        params: {
          api_key: 'wKFID33FmY06V45putcX',
        },
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const reset = () => {
    setResult(null)
    setImageUri(null);
  }

  const renderBoundingBoxes = () => {
    if (!result || !imageUri) return null;

    const imageWidth = result.image.width;
    const imageHeight = result.image.height;
    const scale = screenWidth / imageWidth;

    return (
      <Svg height={imageHeight * scale} width={screenWidth} style={{ position: 'absolute', top: 0, left: 0 }}>
        {result.predictions.map((pred, index) => (
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
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {imageUri && (
        <View style={{ position: 'relative' }}>
          <Image source={{ uri: imageUri }} style={{ width: screenWidth, height: 'auto', aspectRatio: 1 }} />
          {renderBoundingBoxes()}
        </View>
      )}
      <Button title="Send image to API" onPress={sendImageToApi} />
      <Button title = "Reset" onPress={reset} />
      {/* {result && <Text>{JSON.stringify(result)}</Text>} */}
    </View>
  );
};

export default App;
