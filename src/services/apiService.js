// src/services/apiService.js

import axios from 'axios';

export const sendImageToApi = async (imageUri) => {
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

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
