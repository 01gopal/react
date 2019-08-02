import React, { Component } from 'react';
import propTypes from 'prop-types'
import Star from './Star';


let selected = true;
class StarRating extends Component {
    static propTypes = {
        totalStars: propTypes.number
    }

    static defaultProps = {
        totalStars: 5
    }

    static initialState = {
        starsSelected: 0
    }

    change(starsSelected) {
        this.setState({starsSelected})
    }

    onClick() {
        console.log `onClick called with selected=${selected}`
        selected = !selected
    }

    render() {
        return (
            <div>
                <Star selected={selected} onClick={this.onClick}/>
            </div>
        )
    }
}
    

export default StarRating