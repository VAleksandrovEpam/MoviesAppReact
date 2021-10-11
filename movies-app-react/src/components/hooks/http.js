import { useState, useEffect } from 'react';

export const useHttp = (dependencies) => {
  const [movies, setFetchedData] = useState(null);

  useEffect(() => {
    // For now we don't use real API call, so url Param is not used
    console.log("Sending Http reuqest to: ");
    let data = [
      {
        cover: "pulpFiction",
        title: "Pulp Fiction",
        genre: "Action & Adventure",
        year: "2004",
        rating: 7.2,
        runtime: "1h 47min",
        description: "Great Movie",
      },
      {
        cover: "bohemian",
        title: "Bohemian Rhapsody",
        genre: "Drama, Biography, Music",
        year: "2003",
        rating: 6.2,
        runtime: "2h 12min",
        description: "Great Movie",
      },
      {
        cover: "killBill",
        title: "Kill Bill: Vol 2",
        genre: "Oscar winning movie",
        year: "1994",
        rating: 5.3,
        runtime: "1h 15min",
        description: "Great Movie",
      },
      {
        cover: "avengers",
        title: "Avengers: War of Infinity",
        genre: "Action & Adventure",
        year: "2004",
        rating: 8.4,
        runtime: "2h 51min",
        description: "Great Movie",
      },
      {
        cover: "incveption",
        title: "Inception",
        genre: "Action & Adventure",
        year: "2003",
        rating: 3.8,
        runtime: "3h 02min",
        description: "Great Movie",
      },
      {
        cover: "dogs",
        title: "Reservoir dogs",
        genre: "Oscar winning movie",
        year: "1994",
        rating: 4.2,
        runtime: "2h 20min",
        description: "Great Movie",
      },
    ];
    setFetchedData(data);
  }, [dependencies]);

  return [movies];
};
