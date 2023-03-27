import React from 'react';

const Search = (props) => {
    return (
        <div className="">
            <input className="" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Type to search..."></input>
        </div>
    );
};

export default Search;