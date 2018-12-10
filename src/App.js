import React, { Component } from 'react';
import Lethbridge from './containers/Lethbridge/Lethbridge';

class App extends Component {
  render() {
    return (
      <div className="App">
        Lethbridge Food Guide
        <Lethbridge />
      </div>
    );
  }
}

export default App;
