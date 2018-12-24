import React, { Component } from 'react';
import Cuisines from './components/Cuisines/Cuisines';
import styles from './styels/app.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Lethbridge Food Guide</h1>
        <Cuisines />
      </div>
    );
  }
}

export default App;
