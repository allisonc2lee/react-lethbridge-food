import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';

import Filter from '../Filter/Filter';

import Suggestion from '../../components/Suggestion/Suggestion';
import RestaurantList from '../../components/RestaurantList/RestaurantList';


class Lethbridge extends Component {
    state = {
        names: [],
        suggestion: null,
        getList: false,
        loading: false,
        error: false,
        selected: false,
        sort: "1",
        list: []
    }
// https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&cuisines=168&sort=rating

    componentDidMount() {
        const config = { headers: {'user-key': ''} };
        const sortData = "&cuisines=" + this.state.sort
        axios.get('/search?entity_id=2891&entity_type=city&count=50&sort=rating' + sortData , config) // The dault search value 
            .then(res => {
                console.log(res.data)
                // console.log(res.data.restaurants)
                // this.setState({ names: res.data.restaurants })
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true})
            })
    }

    getSuggestion = () => {
        // randomItem = names[Math.floor(Math.random()*names.length)];
        let rSuggestion;
        if(this.state.names) {
            let randomR = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            rSuggestion = randomR.restaurant.name
            console.log(randomR.restaurant.name)
            this.setState({suggestion: rSuggestion})
        } 
        return rSuggestion
    }

    getRestaurantList = () => {
        let rData = <p>This is a suggestion</p>
        if(this.state.getList) {
            rData = this.state.names.map((r, i) => {
                return(
                    <li key={i}>
                        <span>Name: { r.restaurant.name }</span>
                    </li>
                )
            }) 
            
        }
        return rData
    }

    getRestaurantsHandler = () => {
        let rList = <p>Loading...</p>
        if(this.state.names) {
            this.setState({getList: true})
            console.log('Get getRestaurantsHandler is working fine')
        }
        return rList
    }

    gotOption = (event) => {
        this.setState({sort: event.target.value, select: true})
        if(this.state.selected) {
            console.log('selected option:',event.target.value)
            // const cuisineItems = this.state.cuisines.map((cuisine) => {
            //     return <option>{cuisine.cuisine.cuisine_name}</option>
            // })
            this.setState({sort: event.target.value})
        }
        console.log(this.state.sort)
        console.log('Selected value:', event.target.value);
    }

    render () {
        // const cuisineItems = this.state.cuisines.map((cuisine) => {
        //     i = "hello"
        //     return(
        //         <option key={i}>{cuisine.cuisine.cuisine_name}</option>
        //     )
        // })
        return (
            <Aux>
                <h2>Lethbridge Food Guide</h2>
                <select onChange={this.gotOption}>
                    <option value="1">--Please select a cusion 1--</option>
                    <option value="2">--Please select a cusion 2--</option>
                    <option value="3">--Please select a cusion 3--</option>
                    <option value="4">--Please select a cusion 4--</option>
                    <option value="5">--Please select a cusion 5--</option>
                    <option value="6">--Please select a cusion 6--</option>
                </select>
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion}/>
                <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/>
            </Aux>
        )
    }
}

export default Lethbridge;

