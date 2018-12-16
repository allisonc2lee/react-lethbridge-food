import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Guide from '../Guide/Guide';

class Cuisines extends Component {
  state = {
    error: false,
    optionList: [],
    value: 73,
    getValue: false,
    changed: false
  }
  componentDidMount() {
      const config = { headers: {'user-key': '3f0bd37334434b025a21e7ad2c70e99d'} };
    // The dault search value "American food"
      // If the user selected an option & submitted, we update the sortData value with the id
      axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=2891` , config) 
          .then(res => {
              this.setState({optionList: res.data.cuisines})
              //console.log(this.state.optionList)
          })
          .catch(error => {
              this.setState({error: true})
          })
  }
  
    getOption = (event) => {
        let newVal = {...this.state.value}
        newVal = event.target.value
        this.setState({value: + newVal, changed: true})
        console.log('current Value is: ' + newVal)
        return newVal
    }

    clicked = () => {
      this.props.onCuisineClick(this.props.id); // Call with cuisine id
    };

    render() {
      // const onChanged = this.state.getValue
      const CuisinesCopy = [...this.state.optionList]
      console.log(CuisinesCopy)
      const cuisineItems = CuisinesCopy.map((item) => {
        return(
            <option key={item.cuisine.cuisine_id.toString()} value={ item.cuisine.cuisine_id } onClick={ this.clicked }>{item.cuisine.cuisine_name}</option>
            
        )
      })

      return (
        
        <Aux>
          <p>Goddamnit! I am going to get the updated json data</p>
            
          <select onChange={this.getOption}>
              <option value="1">--Please select a cusion--</option>
              <option value="2">--Please select a cusion 2--</option>
              { cuisineItems }
          </select>
          <Guide getOption={this.getOption} updated={this.state.changed} value={this.state.value}/>
        </Aux>

        )
    }
  }
  
  export default Cuisines;
  