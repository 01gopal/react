import React, { Component } from "react";
import HiddenMessage from "./HiddenMessage";
import ShowHideMessage from "./ShowHideMessage";

class HiddenMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "The crow crows after midnight",
        "Bring a watch and dark cloths to the spot",
        "Jericho Jericho Go"
      ],
      showing: -1
    };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      let { showing, messages } = this.state;
      console.log("showing=" + showing);
      showing = ++showing > messages.length ? -1 : showing;
      this.setState({ showing });
    }, oneSecond());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { messages, showing } = this.state;
    return (
      <div>
        {messages.map((message, i) => (
          //<HiddenMessage key={i} hide={i !== showing}>{message}</HiddenMessage>
          <ShowHideMessage key={i} hide={i !== showing}>{message}</ShowHideMessage>
        ))}
      </div>
    );
  }
}

const oneSecond = () => 1000;

export default HiddenMessages;
