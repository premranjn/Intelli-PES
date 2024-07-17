import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function AnalysisScreen() {
  const [loading, setLoading] = useState(false);
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchDiseaseInfo = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://detect.roboflow.com/paddy-pmvaa/2',
        params: {
          api_key: 'wKFID33FmY06V45putcX',
          image: 'https://kisanvedika.bighaat.com/wp-content/uploads/2023/02/Paddy_Brown-spot-min-1024x685-1.png',
        },
      });
      setDiseaseInfo(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchDiseaseInfo on component mount
  React.useEffect(() => {
    fetchDiseaseInfo();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View>
          <Text style={styles.heading}>Disease Analysis</Text>
          {diseaseInfo ? (
            <View>
              <Text style={styles.infoText}>Disease: {diseaseInfo.predictions[0]?.class}</Text>
              <Text style={styles.infoText}>Confidence: {diseaseInfo.predictions[0]?.confidence}</Text>
              {/* Add more details as needed */}
            </View>
          ) : (
            <Text>No disease information available</Text>
          )}
        </View>
      )}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 4,
  },
  errorText: {
    color: 'red',
  },
});
