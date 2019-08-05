import React, {Component} from 'react'

class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit = (e) => {
        const {_title, _color} = this.refs
        e.preventDefault()
        alert(`New Color= ${_title.value} ${_color.value}`)
        _title.value=''
        _color.value='#000000'
        _title.focus()
    }

    render = () => (
    <form onSubmit={this.submit}>
        <input type="text"  ref="_title" placeholder="color title..." required></input>
        <input type='color' ref="_color" required></input>
        <button>ADD</button>
    </form>
    )
}

export default AddColorForm