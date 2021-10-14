import React, { Component } from 'react';
import axios from 'axios';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {foods: []}
        this.baseAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/";
    }
    async componentDidMount() {
        let newItem = await axios.get(`${this.baseAPI_URL}type_amount/${this.props.type}/5`);
            this.setState({ foods: newItem.data });
            for (let i = 0; i < newItem.data.length; i++) {
            console.log(newItem.data[i].name);
            <h2>{newItem.data[i].description}</h2>
            }   
    }

    render() {
        // const newFood = this.state.foods.map((item, i) => (
        //     <div>
        //         <h5>{ item.name }</h5>
        //         <p>{ item.description }</p>
        //     </div> 
        // ));
        return <h1>Menu Items:</h1>
    }
}

export default MenuItem;