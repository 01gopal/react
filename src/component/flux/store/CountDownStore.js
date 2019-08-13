import { EventEmitter } from 'events'

class CountDownStore extends EventEmitter {
    constructor(count=10, dispatcher) {
        super()
        this._count = count
        this.dispatcherIndex = dispatcher.register(this.dispatcher.bind(this))
    }

    getCount() {
        return this._count
    }

    dispatch(payload) {
        const { type } = payload.action
        switch (type) {
            case "TICK":
                this._count = this._count - 1
                this.emit("TICK", this._count)
                return true
            case "RESET":
                this._count = payload.action.count
                this.emit("RESET", this._count)
                return true
            default:
                return false
        }
    }
}

export default CountDownStore