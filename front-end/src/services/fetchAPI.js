import axios from 'axios';

export const fetchAPIGet = async (method, url) => {
  const response = await axios({
    method,
    url,
  });
  return response.data;
};