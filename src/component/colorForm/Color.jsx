import React from "react";
import PropType from "prop-types";
import StarRating from "../star/StarRating";

class Color extends React.Component {
  componentWillMount() {
    this.style = { backgroundColor: "#CCC" };
  }
  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }

  componentWillUpdate() {
    this.style = null;
  }

  render() {
    const { title, rating, color, onRate, onRemove } = this.props;

    return (
      <section className="color" style={this.style}>
        <h1>{title}</h1>
        <button onClick={onRemove}>Remove</button>
        <div className="color" style={{ backgroundColor: color }}>
          {color}
        </div>
        <div>
          <StarRating
            starsSelected={rating}
            onRate={selectedRating => onRate(selectedRating)}
          />
        </div>
      </section>
    );
  }
}

Color.propType = {
  title: PropType.string,
  rating: PropType.numbner,
  color: PropType.string,
  onRate: PropType.func,
  onRemove: PropType.func
};

Color.defaultProps = {
  title: "",
  rating: 0,
  color: "00000",
  onRate: f => f,
  onRemove: f => f
};

export default Color;
