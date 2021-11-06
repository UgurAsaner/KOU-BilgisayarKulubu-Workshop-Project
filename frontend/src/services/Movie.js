import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAllMovies = async (query='') => {
  let path = '/api/movies';

  if (query) {
    path += `?query=${query}`;
  }
 
  const { data } = await axios.get(`${baseUrl}${path}`).catch(console.error);
  return data;
};

