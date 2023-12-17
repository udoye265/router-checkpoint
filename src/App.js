import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetailPage from "./MovieDetailpage";
import "./styles.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const AddMovie = () => {
    const newMovie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: ratingRef.current.value,
    };

    setMovies([...movies, newMovie]);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    posterURLRef.current.value = "";
    ratingRef.current.value = "";
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Filter onFilterChange />
          <MovieList movies={movies} />
          {movies.map((movie, index) => (
            <div key={index}>
              <Link to={`/movie/${index}`}>
                <h1>{movie.title}</h1>
              </Link>
              <p>{movie.rating}</p>
            </div>
          ))}
        </Route>

        <Route path="/movie/:id">
          <MovieDetailPage movies={movies} />
        </Route>

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleRef} />

          <label htmlFor="description">Description:</label>
          <textarea id="description" ref={descriptionRef}></textarea>

          <label htmlFor="posterURL">Poster URL:</label>
          <input type="text" id="posterURL" ref={posterURLRef} />

          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" ref={ratingRef} />

          <button onClick={AddMovie}>Add Movie</button>
        </div>
      </div>
    </Router>
  );
};

export default App;



