import React, {useState, useEffect} from 'react';
import './css/main.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const query = "james bond";

    const getOnLoadMovie = async (query) => {
        const url = `http://www.omdbapi.com/?s=${query}&type=movie&apikey=263d22d8&page=1`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search.slice(0, 10));
        }
    };

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
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
                <MovieList movies={movies}/>
            </main>
        </div>
    );
};

export default App;