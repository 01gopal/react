import React, { Component } from "react";

export default class HiddenMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.hide ? props.hide : true
    };
  }

  componentWillReceiveProps({hide}) {
    this.setState({hidden: hide})
  }

  render() {
    const { hidden } = this.state;
    const { children } = this.props;
    return (
      <div>{hidden ? children.replace(/[a-zA-Z0-9]/g, "x") : children}</div>
    );
  }
}
