import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';

class Lethbridge extends Component {
    state = {
        names: [],
        restaurant: "name",
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


    render () {
            const listItems = this.state.names.map((name, i) => {
                i = name.restaurant.id
                //console.log(i)
                return(
                    <li key={i}>
                        <span>{name.restaurant.name}</span>
                    </li>
                )
            })
        

        return (
            <Aux>
                <ul>
                { listItems }
                </ul>
                Lethbridge is wrapped by AUX
            </Aux>
        )
    }
}

export default Lethbridge;

