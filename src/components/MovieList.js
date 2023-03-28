import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <section className="movie view-width" key={movie.imdbID}>
                    <div className="movie-left">
                        <img className="movie-left-poster" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                        <img className="movie-left-poster-blur" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                    </div>
                    <div className="movie-details">
                        <div className="movie-details-inner">
                            <h2 className="movie-details-inner-title">{movie.Title}</h2>
                            <p className="movie-details-inner-year"><span>Year:</span> {movie.Year}</p>
                            <p className="movie-details-inner-genre"><span>Genre:</span> {movie.Genre}</p>
                            <p className="movie-details-inner-director"><span>Director:</span> {movie.Director}</p>
                            <p className="movie-details-inner-actors"><span>Actors:</span> {movie.Actors}</p>
                            <p className="movie-details-inner-rating"><span>Rating:</span> {movie.imdbRating}</p>
                            <p className="movie-details-inner-awards"><span>Awards:</span> {movie.Awards}</p>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default MovieList;