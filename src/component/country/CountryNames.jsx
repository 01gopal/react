import React from 'react'
import DataLoadComponent from '../higher-order-component/DataLoadComponent';

const CountryNames = ({ data, selected = "" }) =>
    <select defaultValue={selected}>
        {data.map(({ name }, i) => 
            <option key={i} value={name}>{name}</option>
        )}
    </select>

const CountryDropDown = DataLoadComponent(CountryNames, "https://restcountries.eu/rest/v1/all")

export default CountryDropDown