import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 42
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log(e)
        e.preventDefault()
        const {count} = this.state
        this.setState({
            count: count + 1
        })
    }

    render() {
        const {count} = this.state
        return (
            <>
                <div>
                    <h2>{count}</h2>
                    <button className={"counter-button"} onClick={this.handleClick}>Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}

export default Counter;