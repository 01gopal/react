import React  from 'react';

const Ingredient = ({name, measurement, amount}) =>
    <li>
        <span className="amount">{amount} </span>
        <span className="measaurement">{measurement} </span>
        <span className="name">{name}</span>
    </li>
export default Ingredient