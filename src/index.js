import React from 'react';
import { render } from 'react-dom';
import App from './App'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    <App />
    // <MemberList count={-1}/>
    , document.getElementById("root")
)