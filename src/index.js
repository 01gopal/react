import React from 'react';
import ReactDom from 'react-dom';
import Countdown from './component/flux/view/Countdown';
import CountDownStore from './component/flux/store/CountDownStore'
import CountDownDispatcher from './component/flux/dispatcher/CountDownDispatcher'
import countDownAction from './component/flux/action/CountDownAction'
window.React = React

const dispatcher = new CountDownDispatcher()
const actions = countDownAction(dispatcher)
const store = new CountDownStore(10, dispatcher)

const render = (count) => ReactDom.render(
    <Countdown count={count} {...actions}/>
    , document.getElementById("root")
)

store.on(("TICK",  render(store.count)))
store.on(("RESET", render(store.count)))
render(store.count)