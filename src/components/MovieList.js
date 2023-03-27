import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <section className="movie view-width" key={movie.imdbID}>
                    <img className="movie-poster" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                    <div className="movie-details">
                        <h2 className="movie-details-title">{movie.Title}</h2>
                        <p className="movie-details-year"><strong>Year:</strong> {movie.Year}</p>
                        <p className="movie-details-genre"><strong>Genre:</strong> {movie.Genre}</p>
                        <p className="movie-details-director"><strong>Director:</strong> {movie.Director}</p>
                        <p className="movie-details-actors"><strong>Actors:</strong> {movie.Actors}</p>
                        <p className="movie-details-rating"><strong>Rating:</strong> {movie.imdbRating}</p>
                        <p className="movie-details-awards"><strong>Awards:</strong> {movie.Awards}</p>
                    </div>
                </section>
            ))}
        </>
    );
};

export default MovieList;