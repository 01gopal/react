import React, { Component } from "react";
import propTypes from "prop-types";


const AddColorForm = ({onNewColor = a => a}) => {
  let _title, _color
  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
  }

  return (<form onSubmit={submit}>
    <input ref={input => _title = input} type="text" placeholder="color title..." required />
    <input ref={input => _color = input} type="color" required />
    <button>ADD</button>
  </form>)
}

/* class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  static propTypes = {
    onNewColor: propTypes.func.isRequired
  }

  static defaultProps = {
    onNewColor: a => a
  };

  submit(e) {
    const { _title, _color } = this.refs;
    e.preventDefault();
    this.props.onNewColor(_title.value, _color.value);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="color title..." required />
        <input ref="_color" type="color" required />
        <button>ADD</button>
      </form>
    );
  }
} */

export default AddColorForm;
