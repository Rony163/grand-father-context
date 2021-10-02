import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = (props) => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Aunty;