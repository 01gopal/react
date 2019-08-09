import React from 'react';
import { render } from 'react-dom';
// import DataLoadComponent from './component/higher-order-component/DataLoadComponent';
import RandomMeUser from './component/member/RandomMeUser'
import CountryDropDown from './component/country/CountryNames'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    // <AddColorForm onNewColor={logColor}/>
    // <MemberList count={-1}/>
    // <RandomMeUser count={10} />
    <CountryDropDown selected="United States"/>
    , document.getElementById("root")
)