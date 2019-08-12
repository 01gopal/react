import React from 'react';
import { render } from 'react-dom';
import Counter from './component/count/ButtonCount'
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)


render(
    // <AddColorForm onNewColor={logColor}/>
    // <MemberList count={-1}/>
    <Counter />
    , document.getElementById("root")
)