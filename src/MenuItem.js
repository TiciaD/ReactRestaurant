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

    generatePrice() {
        let max;
        let min;
        switch (this.props.type) {
            case '1':
            case '3':
                max = 18;
                min = 3;
                break;
            case '5':
                max = 28;
                min = 10;
                break;
            case '8':
                max = 5;
                min = 1;
                break;
            default:
                max = 15;
                min = 1;
        };
        let range = (max - min) + min
        let randPrice = (Math.random() * range).toFixed(2);
        return randPrice;
    };

    render() {
        const newFood = this.state.foods.map((item, i) => (
            <>
                <h5>{ item.name }</h5>
                <p>{ item.description }</p>
                <p className="fw-bold">${this.generatePrice()}</p>
            </> 
        ));
        return (
            <>
                <>{newFood}</>
            </>
        )
    }
}

export default MenuItem;