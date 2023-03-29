import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/main.css';
import Navbar from './components/Navbar';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const location = useLocation();
    const { from } = location.state;

    const getMovieRequest = async (from) => {
        const movieUrl = `http://www.omdbapi.com/?i=${from}&plot=full&apikey=25dbba7e&r=json`;
        const movieResponse = await fetch(movieUrl);
        const movieResponseJson = await movieResponse.json();
        return movieResponseJson;
    };

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieDetails = await getMovieRequest(from);
            setMovies([movieDetails]);
        };
        fetchMovieDetails();
    }, [from]);

    return (
        <>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
            <main className="main">
                <section className="movie-inner view-width">
                    {movies.map((movie) => (
                        <>
                            <div className="movie-inner-header" key={movie.imdbID}>
                                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                            </div>
                            <div className="movie-inner-info">
                                <div className="movie-inner-info-left">
                                    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                                </div>
                                <div className="movie-inner-info-right">
                                    <h2 className="movie-inner-info-right-title">{movie.Title}</h2>
                                    <p className="movie-inner-info-right-text"><span>Year:</span> {movie.Year}</p>
                                    <p className="movie-inner-info-right-text"><span>Genre:</span> {movie.Genre}</p>
                                    <p className="movie-inner-info-right-text"><span>Director:</span> {movie.Director}</p>
                                    <p className="movie-inner-info-right-text"><span>Actors:</span> {movie.Actors}</p>
                                    <p className="movie-inner-info-right-text"><span>Rating:</span> {movie.imdbRating}</p>
                                    <p className="movie-inner-info-right-text"><span>Awards:</span> {movie.Awards}</p>
                                    <p className="movie-inner-info-right-text"><span>Plot:</span> {movie.Plot}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Home;