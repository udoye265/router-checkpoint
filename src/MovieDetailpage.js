import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[id];

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.rating}</p>
      
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default MovieDetailPage;
