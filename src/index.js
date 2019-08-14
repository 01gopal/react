import React from 'react';
import ReactDOM from 'react-dom';
import CountdownView from './component/flux/view/CountdownView';
import CountDownStore from './component/flux/store/CountDownStore'
import CountDownDispatcher from './component/flux/dispatcher/CountDownDispatcher'
import countDownAction from './component/flux/action/CountDownAction'
window.React = React

// Created our app dispatcher
const appDispatcher = new CountDownDispatcher()

// Using app dispatcher generated our actions (tick:, reset:)
const actions = countDownAction(appDispatcher)

// appDispatcher is registered with store, initial count value to 10
const store = new CountDownStore(10, appDispatcher)

// ReactDOM.Render countDownView with count value
// provided by other method render using the store.count value.
const render = (count) => ReactDOM.render(
    <CountdownView count={count} {...actions}/>
    , document.getElementById("root")
)

// Listeners are added to the store, which completes the circle.
// When the store emits a "TICK" action and yields a new count (See CountDownStore.js)
// then store calls this listener to render the view and updated count value.
store.on("TICK", () => render(store.count))
store.on("RESET", () => render(store.count))

// First view rendering of CountDownView
render(store.count)