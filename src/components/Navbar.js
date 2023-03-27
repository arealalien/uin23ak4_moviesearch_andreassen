import React, {useState} from 'react';
import Search from "./Search";

const Navbar = ({searchValue, setSearchValue}) => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner view-width">
                    <h1>Movies</h1>
                    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                </div>
            </nav>
        </>
    );
};

export default Navbar;