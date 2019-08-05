import React from 'react';
import { render } from 'react-dom';
import StarRating from './component/star/StarRating';
window.React = React

// const logColor = (title, color) => console.log(`New color : ${title} ${color}`)

render(
    // <AddColorForm onNewColor={logColor}/>, document.getElementById("root")
    <StarRating totalStars={10} starsSelected={4}/>, document.getElementById("root")
)