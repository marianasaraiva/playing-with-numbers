import axios from 'axios';

export const fetchAPIGet = async (method, url) => {
  const response = await axios({
    method,
    url,
  });
  return response.data;
};

export const fetchAPIPost = async (method, url, data) => {
  const response = await axios({
    method,
    url,
    data,
  });
  return response.data;
}
