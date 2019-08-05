import React from "react";
import PropTypes from "prop-types";

const Summary = ({ ingredients=1, steps=1, title="[recipe]" }) => (
  <div>
    <h1>{title}</h1>
    <p>
      {ingredients} Ingredients | {steps} Steps
    </p>
  </div>
);

Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  name: (props, propName) =>
    typeof props[propName] !== "string"
      ? new Error("A title must be string")
      : props[propName].length > 20
      ? new Error("Title name must be less than 20")
      : null
};

export default Summary;
