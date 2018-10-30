import React from 'react';

const Search = () => {
    return (
        <div className="ui segment center aligned">
            <div className="ui right icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Search