import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className="">
                    <img className="" src={movie.Poster} alt="movie"></img>
                    <div className="" onClick={() => props.handleFavouritesClick(movie)}></div>
                </div>
            ))}
        </>
    );
};

export default MovieList;