const countDownAction = (dispatcher) => ({
    tick : (currentCount)   => dispatcher.handleAction({ type: "TICK" }),
    reset: (count)          => dispatcher.handleAction({ type: "RESET", count: count })
})

export default countDownAction