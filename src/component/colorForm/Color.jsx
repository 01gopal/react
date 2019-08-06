import React from "react";
import StarRating from "../star/StarRating";

const Color = ({ title, rating = 0, color , onRate=f=>f, onRemove=f=>f}) => (
  <section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color" style={{ backgroundColor: color }} />
    <div>
      <StarRating
        starsSelected={rating}
          onRate={selectedRating => onRate(selectedRating)}
      />
    </div>
  </section>
);

export default Color;
