import React from 'react'
import DataLoadComponent from '../higher-order-component/DataLoadComponent';

const PeopleList = ({ data }) => {
            console.log("data=" + data)
    return (
    <ol>
        {data.results.map((person, i) => {
            let {first, last} = person.name
            return <li key={i}>{first} {last}</li>
        })}
    </ol>
    )
}
const RandomMeUser = () => 
    DataLoadComponent(PeopleList, `https://randomuser.me/api?results=0`)

export default RandomMeUser()