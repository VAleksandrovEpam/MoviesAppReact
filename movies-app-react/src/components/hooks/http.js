import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../redux';

export const useHttp = (url, dependencies) => {
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

export const useAddMovie = (url, dependencies,  body) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
      };
    if(body) {
      fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        dispatch(getAllMovies(data.data))
      })
    }
  }, dependencies);
};