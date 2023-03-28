import React, {useState, useEffect} from 'react';
import './css/main.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const query = "james bond";

    const getOnLoadMovie = async (query) => {
        const url = `http://www.omdbapi.com/?s=${query}&type=movie&plot=full&apikey=25dbba7e&r=json&page=1`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            const moviesWithInfo = await Promise.all(
                responseJson.Search.slice(0, 10).map(async (movie) => {
                    const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=25dbba7e&r=json`;
                    const movieResponse = await fetch(movieUrl);
                    const movieResponseJson = await movieResponse.json();
                    return { ...movie, ...movieResponseJson };
                })
            );
            setMovies(moviesWithInfo);
        }
    };

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
        getOnLoadMovie(query);
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className="App">
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}></Navbar>
            <main className="main">
                <section className="main-inner view-width">
                    <MovieList movies={movies}/>
                </section>
            </main>
        </div>
    );
};

export default App;