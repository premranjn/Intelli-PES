// src/screens/HomeScreen.js

import React, { useState } from 'react';
import { View, Dimensions, Text, Button, ScrollView, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { sendImageToApi } from '../services/apiService';
import BoundingBox from '../components/BoundingBox';
import ImageViewer from '../components/ImageViewer';
import PickImageButton from '../components/PickImageButton';
import ResetButton from '../components/ResetButton';


const HomeScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [result, setResult] = useState(null);
  const { width: screenWidth } = Dimensions.get('window');

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        setResult(null); // Reset result when a new image is picked
      }
    });
  };

  const handleSendImage = async () => {
    if (!imageUri) {
      alert('Please select an image first');
      return;
    }

    try {
      const response = await sendImageToApi(imageUri);
      setResult(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const reset = () => {
    setImageUri(null);
    setResult(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        <PickImageButton onPress={pickImage} />
      </View>
      {imageUri && (
        <View style={styles.imageContainer}>
          <ImageViewer imageUri={imageUri} width={screenWidth} />
          {result && (
            <BoundingBox
              predictions={result.predictions}
              imageWidth={result.image.width}
              imageHeight={result.image.height}
              scale={screenWidth / result.image.width}
            />
          )}
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Analyse my crop" onPress={handleSendImage} />
      </View>
      <View style={styles.buttonContainer}>
        <ResetButton onPress={reset} />
      </View>
      {result && <Text style={styles.resultText}>{JSON.stringify(result)}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#0000cd',
    marginBottom: 12,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign:"justify"
  },
  featuresHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuresText: {
    fontSize: 16,
    lineHeight: 24,
  },
  imageContainer: {
    position: 'relative',
    marginVertical: 20,
    width: '100%',
  },
  resultText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
});

export default HomeScreen;
