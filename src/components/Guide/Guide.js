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
        address: null,
        suggested: false,
        list: [],
        testing: "testing"
    }
    
    // https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&cuisines=168&sort=rating

    componentDidMount() {
        this.getZomato()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevProps.value !== this.props.value) {
                this.getZomato()
                console.log('The state is updated in the Guide component')
            
        }
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
        const newName = [...this.state.names]
    
        if(this.state.getList) {

            const uniKeys = [...(new Set(newName.map((name, i) => {
                return(
                    <li key={i}>
                        <span>Name: { name.restaurant.name }</span>
                    </li>
                )
            })))]

        
            return uniKeys
        }
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
        this.setState({getList: true})
    }


    isDisabled = () => {
        return true;
    }

    render () {
        
        return (
            <Aux>
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion} isDisabled={this.isDisabled()}/>
                {/* <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/> */}
            </Aux>
        )
    }
}

export default Guide;


// How about get the cusine list on DidMoutn
// Then update the axios in a clicked function
