import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className="">
                    <img className="" src={movie.Poster} alt="movie"></img>
                    <div className="">
                        <h1>{props.heading}</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;