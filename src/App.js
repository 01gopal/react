import React, { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import AddColorForm from "./component/colorForm/AddColorForm";
import ColorList from "./component/colorForm/ColorList";

class App extends Component {
  constructor(props) {
    super(props);
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
    this.state = {
      colors: []
    }
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title: title,
        color: color,
        rating: 0
      }
    ];
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      color.id === id
        ? {
            ...color,
            rating
          }
        : color
    );
    this.setState({ colors });
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div>
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    );
  }
}

export default App;
