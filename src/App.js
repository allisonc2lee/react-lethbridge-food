import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cuisines from './components/Cuisines/Cuisines';
import GetSuggestionBtn from './components/GetSuggestion';
import styles from './styles/app.module.scss';

class App extends Component {
  state = {
    suggested: false,
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Cuisines />
        <GetSuggestionBtn />
      </div>
    );
  }
}

export default App;
