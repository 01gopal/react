import React from "react";
import Color from "./Color";

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => (
  <div className="color-list">
    {colors.length > 0 ? (
      colors.map((color, i) => (
        <Color
          key={color.id}
          {...color}
          onRate={rating => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    ) : (
      <p>No Colors Listed. (Add new Color)</p>
    )}
  </div>
);

export default ColorList;
