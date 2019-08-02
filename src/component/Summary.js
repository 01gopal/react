import React, {Component} from "react";
import PropTypes from "prop-types";

class Summary extends Component { 
  static propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    name: (props, propName) =>
      typeof props[propName] !== "string"
        ? new Error("A title must be string")
        : props[propName].length > 20
        ? new Error("Title name must be less than 20")
        : null
  };

  render = () => {
    const {name='[recipe]', ingredients=0, steps=0} = this.props

    return (
    <div>
      <h1>{name}</h1>
      <p>
        {ingredients} Ingredients | {steps} Steps
      </p>
  </div>)
  }
}

export default Summary;
