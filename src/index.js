import React from 'react';
import { render } from 'react-dom';
import Menu from './component/Menu';
import data from './data/recipes';
import './index.css';

window.React = React

render(
    <Menu recipes={data}
        title="Delicious Recipes" />,
    document.getElementById("root")
)