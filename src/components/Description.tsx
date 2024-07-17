import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Description() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.descriptionText}>
          The Paddy Expert System is an AI-driven mobile app that helps farmers diagnose diseases in paddy crops through image analysis. By leveraging machine learning, the app allows users to take a photo of their crops and receive real-time information on potential diseases. It provides details on the disease type and confidence level, aiding farmers in making timely and informed decisions to manage crop health effectively.
        </Text>
        <Text style={styles.featuresHeading}>Features:</Text>
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}><Text style={styles.featureText}>Image Upload</Text></View>
          <View style={styles.featureItem}><Text style={styles.featureText}>Disease Detection</Text></View>
          <View style={styles.featureItem}><Text style={styles.featureText}>Diagnosis Report</Text></View>
          <View style={styles.featureItem}><Text style={styles.featureText}>User-Friendly Interface</Text></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000cd',
    marginBottom: 12,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
  },
  featuresHeading: {
    textAlign:"center",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    textAlign:"center"
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
