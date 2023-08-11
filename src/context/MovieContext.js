// ApiContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const apiKey = '492aa796a4msh50f07a3bd4cccf5p1399dejsn4d8fd4d198eb';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '492aa796a4msh50f07a3bd4cccf5p1399dejsn4d8fd4d198eb',
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setMovies(response.data.results)
      } catch (error) {
        console.error(error);
      }
  };

  const getById = (id) => {
    if (!movies) return null;
    return movies.find(item => item.imdbid === id);
  };

  return (
    <ApiContext.Provider value={{ movies, getById }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };