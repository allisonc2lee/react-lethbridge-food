import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';

import Suggestion from '../../components/Suggestion/Suggestion';
import RestaurantList from '../../components/RestaurantList/RestaurantList';

class Guide extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.value + ' in Guide')
    }

    state = {
        names: [],
        suggestion: null,
        getList: false,
        loading: false,
        error: false,
        updated: this.props.updated,
        value: 8,
        list: []
    }
// https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&cuisines=168&sort=rating

    componentDidMount() {
        // this.getZomato()
    }

    getZomato() {
        const config = { headers: {'user-key': '3f0bd37334434b025a21e7ad2c70e99d'} };
        // The dault search value "American food"
        // If the user selected an option & submitted, we update the sortData value with the id
        axios.get(`/search?entity_id=2891&entity_type=city&count=50&sort=rating$&cuisines=${this.props.value}` , config) 
            .then(res => {
                this.setState({names: res.data.restaurants})
                console.log(this.state.names)
            })
            .catch(error => {
                this.setState({error: true})
            })
    }


    

    // Get the Suggestion
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


    // Get the Json
    getRestaurantsHandler = () => {
        let rList = <p>Loading...</p>
        if(this.state.names) {
            this.setState({getList: true})
        }
        return rList
    }

    // Output the restaurant List 
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

    render () {
        
        return (
            <Aux>
                <button onClick={ this.props.getOption }>Update Value: { this.props.value } </button>
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion}/>
                <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/>
            </Aux>
        )
    }
}

export default Guide;


// How about get the cusine list on DidMoutn
// Then update the axios in a clicked function
