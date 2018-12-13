import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';

//https://medium.com/@AndrewBonner2/controlled-components-in-react-920f3e795d87
//https://stackoverflow.com/questions/44366709/how-to-pass-options-value-to-a-function-in-react
//https://github.com/JedWatson/react-select/issues/1631
// https://www.reddit.com/r/reactjs/comments/3mq0wr/generating_option_tags_for_a_select_element/

class filter extends Component {
    state = {
        loading: false,
        cuisines: [],
        value: ""
    }

    componentDidMount() {
        const config = { headers: {'user-key': ''} };
        axios.get('/cuisines?city_id=2891', config)
            .then(res => {
                this.setState({cuisines: res.data.cuisines})
                console.log(this.state.cuisines)
            })
            .catch(error => {
                console.log(error)
                //this.setState({error: true})
            })
    }

    gotOption = (event) => {
        this.setState({value: event.target.value})
        console.log(this.state.value)
        console.log('Selected value:', event.target.value);
    }

    render () {
        const cuisineItems = this.state.cuisines.map((cuisine, i) => {
            i = cuisine.cuisine.cuisine_id
            //console.log(i)
            return(
                <option key={i}>{cuisine.cuisine.cuisine_name}</option>
            )
        })

        return (
            <Aux>
                <label htmlFor="filter">Filter by Poet: </label>
                <select onChange={this.gotOption}>
                    <option value="">--Please select a cusion--</option>
                    { cuisineItems }
                </select>
            </Aux>
        )
    }
}

export default filter;