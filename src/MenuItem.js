import React, { Component } from 'react';

class MenuItem extends Component {
    // Model
    constructor(props) {
        super(props);
        this.state = { foods: [] };

    }

    // Controller

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
        let randPrice = (Math.random() * (max - min) + min).toFixed(2);
        return randPrice;
    };

    render() {
        // View
        return (

            <>
                <h5 className="text-decoration-underline">{this.props.data.name}</h5>
                <p>{this.props.data.description}</p>
                <p className="fw-bold">${this.generatePrice()}</p>
            </>
        )
    }
}

export default MenuItem