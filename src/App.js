import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/main.css';
import Home from './Home';
import Movie from './Movie';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Movie" element={<Movie />}></Route>
            </Routes>
        </div>
    );
};

export default App;