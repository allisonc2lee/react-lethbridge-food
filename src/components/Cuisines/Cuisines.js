import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Guide from '../Guide/Guide';

class Cuisines extends Component {
  state = {
    error: false,
    optionList: [],
    value: 1,
    getValue: false
  }
  componentDidMount() {
      const config = { headers: {'user-key': ''} };
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
  
    gotOption = (event) => {
        let newVal = {...this.state.value}
        newVal = event.target.value
        this.setState({getValue: true})
        if(this.state.getValue) {
          this.setState({value: newVal})
          console.log(newVal)
        }

    }

    render() {
      const onChanged = this.setState.getValue
      const CuisinesCopy = [...this.state.optionList]
      const cuisineItems = CuisinesCopy.map((item) => {
        return(
            <option key={item.cuisine.cuisine_id.toString()} value={ item.cuisine.cuisine_id }>{item.cuisine.cuisine_name}</option>
        )
      })

      return (
        
        <Aux>
          <p>Goddamnit! I am going to get the updated json data</p>
            
          <select value={this.state.value} onChange={this.gotOption}>
              <option value="1">--Please select a cusion--</option>
              <option value="2">--Please select a cusion 2--</option>
              { cuisineItems }
          </select>
          {onChanged ? (<Guide getOption={this.getOption} value={this.state.value}/>) : (<Guide getOption={this.getOption} value="182"/>)}
           
        </Aux>

        )
    }
  }
  
  export default Cuisines;
  