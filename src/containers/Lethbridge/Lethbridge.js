import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';
import Suggestion from '../../components/Suggestion/Suggestion';
import RestaurantList from '../../components/RestaurantList/RestaurantList';

class Lethbridge extends Component {
    state = {
        names: [],
        suggestion: null,
        getList: false,
        loading: false,
        error: false
    }
    

    componentDidMount() {
        const config = { headers: {'user-key': '3f0bd37334434b025a21e7ad2c70e99d'} };
        axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&count=50&sort=rating', config)
            .then(res => {
                // console.log(res.data.restaurants)
                this.setState({ names: res.data.restaurants })
                //console.log(this.state.names)
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


    render () {

        return (
            <Aux>
                <h2>Lethbridge Food Guide</h2>
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion}/>
                {/* <RestaurantList rList={ this.getRestaurantList() }/> */}
                <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/>
            </Aux>
        )
    }
}

export default Lethbridge;

