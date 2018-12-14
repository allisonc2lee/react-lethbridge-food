import React, { Component } from 'react';


class Cuisines extends Component {
    constructor (props) {
      super(props)
    }
  
    // componentDidMount () {
    //   this.getBitcoinData()
    // }
  
    // getBitcoinData () {
    //   fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`)
    //     .then(response => response.json())
    //     .then(historicalData => this.setState({historicalData}))
    //     .catch(e => e)
    // }
  
    setCurrency (currency) {
      this.setState({currency}, this.getBitcoinData)
    }
  

  
    render() {
  
      return <p>Goddamnit! I am going to get the updated json data</p>
    }
  }
  
  export default Cuisines;
  