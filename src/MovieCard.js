import React from "react";
const Moviecard = ({movie}) => (
<div className="card">
    <h1>{movie.title}</h1>
    <img src={movie.posterURL} alt={movie.title} />
    <p>{movie.description}</p><br/>
    <p>{movie.rating}</p>
</div>
);
export default Moviecard