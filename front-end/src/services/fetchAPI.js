import axios from 'axios';

export const fetchAPIGet = async (method, url) => {
  try {
    const response = await axios({
      method,
      url,
    });
    return { data: response.data };
  } catch (error) {
    console.log(error.response);
    return { error: error.response.data };
  }
};

export const fetchAPIPost = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return { data: response.data };
  } catch (error) {
    return { error: error.response.data.message };
  }
}
