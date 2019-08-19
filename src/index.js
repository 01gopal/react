import React from 'react';
import ReactDOM from 'react-dom';
import storeFactory from './component/redux/store/store'
import App from './App'

window.React = React

const store = storeFactory()

const render = () => 
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )

store.subscribe(() => render())
render()