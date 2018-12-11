import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';

//https://medium.com/@AndrewBonner2/controlled-components-in-react-920f3e795d87

class filter extends Component {
    state = {
        loading: false,
        cuisines: []
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
                <select>
                    <option value="">--Please select a cusion--</option>
                    { cuisineItems }
                </select>
            </Aux>
        )
    }
}

export default filter;