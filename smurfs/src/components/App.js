import React, { Component } from "react";
import Smurfs from './Smurfs';
import Form from './Form';


import "../sass/index.scss";
class App extends Component {

  render() {
    return (
      <div className="App">
          <Form />
          <Smurfs />

      </div>
    );
  }
}

export default App;
