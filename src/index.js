import React from 'react';
import { render } from 'react-dom';
import DataLoadComponent from './component/higher-order-component/DataLoadComponent';
// import RandomMeUser from './component/member/RandomMeUser'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

const PeopleList = ({ data }) => {
    console.log `Data = ${data}`
    return (
        <ol>
            {
                data.results ? 
                    data.results.map((person, i) => {
                    let { first, last } = person.name
                    return <li key={i}>{first} {last}</li>
                    })
                : ""
            }
        </ol>
    )
}

const RandomMeUser = DataLoadComponent(PeopleList, `https://randomuser.me/api?results=12`)

render(
    // <AddColorForm onNewColor={logColor}/>
    // <MemberList count={-1}/>
    <RandomMeUser count={10} />
    , document.getElementById("root")
)