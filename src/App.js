import React, { Component } from "react";
import PropTypes from 'prop-types'
import { v4 } from "uuid";
import "./App.css";
import AddColorForm from "./component/colorForm/AddColorForm";
import ColorList from "./component/colorForm/ColorList";

class App extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    const {store} = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <AddColorForm />
        <ColorList />
      </div>
    );
  }
}

App.propTypes = {
  store : PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}
export default App;
