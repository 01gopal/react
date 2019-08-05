import React, { Component } from "react";
import propTypes from "prop-types";
import Star from "./Star";

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
        starsSelected: props.starsSelected || 0
    };
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({ starsSelected });
  }

  render() {
    return (
      <div>
        {[...Array(this.props.totalStars)].map((item, i) => (
          <Star
            key={i}
            selected={i < this.state.starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
      </div>
    );
  }
}

StarRating.propTypes = {
  totalStars: propTypes.number
};

StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
