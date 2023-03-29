import React from 'react';

const Search = (props) => {
    return (
        <div className="navbar-inner-right-input">
            <input
                className="navbar-inner-right-input-inner"
                value={props.value}
                onChange={(event) => {
                    if (event.target.value.length >= 3) {
                        props.setSearchValue(event.target.value);
                    }
                }}
                placeholder="Type to search..."
            />
        </div>
    );
};

export default Search;