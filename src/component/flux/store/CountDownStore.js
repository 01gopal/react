import { EventEmitter } from 'events'

class CountDownStore extends EventEmitter {
    constructor(count, dispatcher) {
        super()
        this._count = count
        this.dispatcherIndex = dispatcher.register(this.dispatch.bind(this))
    }

    get count() {
        return this._count
    }

    dispatch(payload) {
        const { type, count } = payload.action
        console.log(`${type} action is called with count=${count}`)
        switch (type) {
            case "TICK":
                this._count = this._count - 1
                this.emit("TICK", this._count)
                return false
            case "RESET":
                this._count = count
                this.emit("RESET", this._count)
                return false
            default:
                return false
        }
    }
}

export default CountDownStore