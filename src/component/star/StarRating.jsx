import React/* , { Component }  */from "react";
import propTypes from "prop-types";
import Star from "./Star";

//Star rating as stateless functional component, when rating state is handled by parent component
const StarRating = ({totalStars=5, starsSelected=0, onRate=f=>f}) => 
  <div className="starRating">
    {[...Array(totalStars)].map((item, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => onRate(i + 1)}
          />
        ))}
        <p>{starsSelected} of {totalStars} stars</p>
  </div>

/* class StarRating extends Component {
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
} */

StarRating.propTypes = {
  totalStars: propTypes.number,
  starsSelected: propTypes.number,
  onRate: propTypes.func
};

StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
