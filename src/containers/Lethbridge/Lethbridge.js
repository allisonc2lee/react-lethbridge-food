import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';

import Suggestion from '../../components/Suggestion/Suggestion';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import Cuisines from '../../components/Cuisines/Cuisines';

class Lethbridge extends Component {
    state = {
        names: [],
        suggestion: null,
        getList: false,
        loading: false,
        error: false,
        changed: false,
        sort: "1",
        value: "2",
        list: []
    }
// https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&cuisines=168&sort=rating

    componentDidMount() {
        const config = { headers: {'user-key': '3f0bd37334434b025a21e7ad2c70e99d '} };
        const sortData = "&cuisines=" + this.state.sort // The dault search value "American food"
                                                        // If the user selected an option & submitted, we update the sortData value with the id
        axios.get('/search?entity_id=2891&entity_type=city&count=50&sort=rating' + sortData , config) 
            .then(res => {
                this.setState({names: res.data.restaurants})
                console.log(this.state.names)
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    // Get Suggestion and Get List need to be updated after user selected a value

    getSuggestion = () => { 
        let rSuggestion;
        if(this.state.names) {
            let randomR = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            rSuggestion = randomR.restaurant.name
            //console.log(randomR.restaurant.name)
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
        }
        return rList
    }

    gotOption = (event) => {
        this.setState({value: event.target.value})
        console.log(this.state.value)
        console.log('selected option:',event.target.value)
    }

    render () {
        const cuisineItems = this.state.names.map((name) => {
            return(
                <option key= {name.restaurant.id} >{name.restaurant.name}</option>
            )
        })
        return (
            <Aux>
                <h2>Lethbridge Food Guide</h2>
                <select value={this.state.value} onChange={this.gotOption}>
                    <option value="1">--Please select a cusion--</option>
                    <option value="2">--Please select a cusion 2--</option>
                    { cuisineItems }
                </select>
                <Cuisines />
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion}/>
                <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/>
            </Aux>
        )
    }
}

export default Lethbridge;


// How about get the cusine list on DidMoutn
// Then update the axios in a clicked function
