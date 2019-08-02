import React from 'react';
import { render } from 'react-dom';
// import AddColorForm from './component/AddColorForm'
import StarRating from './component/star/StarRating';
window.React = React

const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    // <AddColorForm onNewColor={logColor}/>, document.getElementById("root")
    <StarRating />, document.getElementById("root")
)