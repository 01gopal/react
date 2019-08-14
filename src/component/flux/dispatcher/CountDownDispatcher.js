import Flux from 'flux'

class CountdownDispatcher extends Flux.Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher