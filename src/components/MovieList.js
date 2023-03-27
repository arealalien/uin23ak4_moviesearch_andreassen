import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className="movie" key={movie.imdbID}>
                    <img className="movie-poster" src={movie.Poster} alt="movie"></img>
                    <div className="movie-details">
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-year"><strong>Year:</strong> {movie.Year}</p>
                        <p className="movie-genre"><strong>Genre:</strong> {movie.Genre}</p>
                        <p className="movie-director"><strong>Director:</strong> {movie.Director}</p>
                        <p className="movie-actors"><strong>Actors:</strong> {movie.Actors}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;