import React from "react";
import Color from "./Color";
import { rateColor, removeColor } from '../redux/actions/action'

const ColorList = ({ store }) => {
  const { colors } = store.getState()

  return (
    <div className="color-list">
      {

        colors.length > 0 ? (
          colors.map((color, i) => (
            <Color
              key={color.id}
              {...color}
              onRate={rating => store.dispatch(rateColor(color.id, rating))}
              onRemove={() => store.dispatch(removeColor(color.id))}
            />
          ))
        ) : (
            <p>No Colors Listed. (Add new Color)</p>
          )}
    </div>
  )
}

export default ColorList;
