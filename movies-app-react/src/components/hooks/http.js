import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [movies, setFetchedData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setFetchedData(data.data);
      })  
      .catch(err => {
        console.log(err)
      })
  }, dependencies);

  return [movies];
};
