import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../redux';

export const useHttp = (url, dependencies,  body = null) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        dispatch(getAllMovies(data.data))
      })  
      .catch(err => {
        console.log(err)
      })
  }, dependencies);
};
