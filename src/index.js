import React from 'react';
import { render } from 'react-dom';
import MemberList from './component/member/MemberList'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    // <AddColorForm onNewColor={logColor}/>
    <MemberList count={-1}/>
    , document.getElementById("root")
)