import React, {useState, useEffect} from 'react';
import './css/main.css';
import MovieList from './components/MovieList';
import Navbar from "./components/Navbar";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&plot=full&apikey=25dbba7e&r=json`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            const moviesWithInfo = await Promise.all(
                responseJson.Search.map(async (movie) => {
                    const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=25dbba7e&r=json`;
                    const movieResponse = await fetch(movieUrl);
                    const movieResponseJson = await movieResponse.json();
                    return { ...movie, ...movieResponseJson };
                })
            );
            setMovies(moviesWithInfo);
        }
    };

    useEffect(() => {
        if (!searchValue) {
            getMovieRequest('James Bond');
        } else {
            getMovieRequest(searchValue);
        }
    }, [searchValue]);
    useEffect(() => { getMovieRequest(searchValue)}, [])

    return (
        <>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}></Navbar>
            <main className="main">
                <section className="main-inner view-width">
                    <MovieList movies={movies}/>
                </section>
            </main>
        </>
    );
};

export default Home;