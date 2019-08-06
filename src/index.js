import React from 'react';
import { render } from 'react-dom';
import App from './App'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    // <AddColorForm onNewColor={logColor}/>
    <App />
    , document.getElementById("root")
)