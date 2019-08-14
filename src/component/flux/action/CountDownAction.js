const countDownAction = (dispatcher) => ({
    //tick action function which preapre action of type "TICK" and send to dispatcher
    tick: (currentCount) =>
        dispatcher.handleAction({
            type: "TICK",
            count: currentCount
        }),

    //reset action function which prepare action of type "RESET" and send it to dispatcher
    reset: (count) =>
        dispatcher.handleAction({
            type: "RESET",
            count: count
        })
})

export default countDownAction