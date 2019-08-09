import React from 'react'
import DataLoadComponent from '../higher-order-component/DataLoadComponent';

const PeopleList = ({ data }) =>
    <ol>
        {data.results.map(({name : {first, last}}, i) => 
            <li key={i}>{first} {last}</li>
        )}
    </ol>

const RandomMeUser = DataLoadComponent(PeopleList, `https://randomuser.me/api?results=10`)

export default RandomMeUser