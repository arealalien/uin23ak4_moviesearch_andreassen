import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className="">
                    <img className="" src={movie.Poster} alt="movie"></img>
                    <div className=""></div>
                </div>
            ))}
        </>
    );
};

export default MovieList;