import React from 'react';
import { render } from 'react-dom';
import AddColorForm from './component/colorForm/AddColorForm';
import './index.css';

window.React = React

render(
    <AddColorForm></AddColorForm>
        ,
    document.getElementById("root")
)