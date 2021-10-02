import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>My Self</h2>
            <small>house: {house}</small>
            <Special></Special>
        </div>
    );
};

export default MySelf;