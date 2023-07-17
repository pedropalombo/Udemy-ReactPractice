import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting movies from API
  const fetchMoviesHandler = useCallback(async () => {
    //starts 'Loading'
    setIsLoading(true);
    
    //nullifing errors as a start
    setError(null);

    //error-wrapping the API request 
    try {
      const response = await fetch('https://sw-http-9e1fb-default-rtdb.firebaseio.com/movies.json');
      
      //in case the request fails, creates & triggers a new error (leaves 'try' and enters 'catch')
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      //waits for the request to be done, so it may set the request data (movies)
      const data = await response.json();

      const loadedMovies = [];

      //map through movies and gets only the useful data from it
      // \-> id, title, openingText, releaseDate
      //PS: Firebase usage
      for(const key in data) {
        loadedMovies.push(
          {
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          }
        );
      }
      setMovies(loadedMovies); //setting 'movies''s state

      // PS: static API usage
      /*const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });*/
      //setMovies(transformedMovies);

      //console.log('movies retrieved: ', loadedMovies);

    //in case of error
    } catch (error) {
      setError(error.message);  //sets 'error''s state
    }

    //and it finishes the 'Loading' proccess
    setIsLoading(false);
  }, []);

  //fetching movies 
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  //adding movie by hand and sending it over to the API
  async function addMovieHandler(movie) {

    const response = await fetch('https://sw-http-9e1fb-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log('data sent to API: ', data);

  }

  //default movie result message
  let content = <p>Found no movies.</p>;

  // -| cases |-
  // movies found!
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  // API request error
  if (error) {
    content = <p>{error}</p>;
  }

  // still making API request
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  //base
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
