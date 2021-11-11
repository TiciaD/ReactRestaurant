import React, { Component } from 'react';
import {Container, Row, Col, Stack, Button} from 'react-bootstrap';
import axios from 'axios';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast: [],
            lunch: [],
            dinner: [], 
            drinks: [], 
            foodType: '1',
            title: 'Breakfast'
        };
        this.baseAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/";
        this.changeToLunch = this.changeToLunch.bind(this);
    };

    async fetchBreakfast() {
        let newFoods = await axios.get(`${this.baseAPI_URL}type_amount/1/10`);
            this.setState({ breakfast: newFoods.data });
            // console.log(newFoods.data);
    };

    async fetchLunch() {
        let newFoods = await axios.get(`${this.baseAPI_URL}type_amount/3/10`);
            this.setState({ lunch: newFoods.data });
            // console.log(newFoods.data);
    };

    async fetchDinner() {
        let newFoods = await axios.get(`${this.baseAPI_URL}type_amount/5/10`);
            this.setState({ dinner: newFoods.data });
            // console.log(newFoods.data);
    };

    async fetchBeverages() {
        let newDrinks = await axios.get(`${this.baseAPI_URL}type_amount/8/6`);
            this.setState({ drinks: newDrinks.data });
            // console.log(newDrinks.data);
    };

    generatePrice(type) {
        let max;
        let min;
        switch (type) {
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

    componentDidMount() {
        this.fetchBreakfast();
        this.fetchLunch();
        this.fetchDinner();
        this.fetchBeverages();
    };

    changeToBreakfast() {
        console.log('Menu changed!');
        this.setState({foodType: '1', title: 'Breakfast'});
    };

    changeToLunch() {
        console.log('Menu changed!');
        this.setState({foodType: '3', title: 'Lunch'});
    };

    changeToDinner() {
        console.log('Menu changed!');
        this.setState({foodType: '5', title: 'Dinner'});
    };

    render() {
        let currentFood;
        console.log({breakfast: this.state.breakfast});
        console.log({drinks: this.state.drinks});
        if (this.state.title === 'Breakfast') {
            currentFood = this.state.breakfast;
        } else if (this.state.title === 'Lunch') {
            currentFood = this.state.lunch;
        } else {
            currentFood = this.state.dinner;
        }
        
        const newFood = currentFood.map((item, i) => (
            <Col sm={12}>
                <h5 className="text-decoration-underline" key={i}>{ item.name }</h5>
                <p key={i+100}>{ item.description }</p>
                <p className="fw-bold">${this.generatePrice(this.state.foodType)}</p>
            </Col>
        ))
        const newDrink = this.state.drinks.map((item, i) => (
            <Col xs={12}>
                <h5 className="text-decoration-underline" key={i}>{ item.name }</h5>
                <p key={i+10}>{ item.description }</p>
                <p className="fw-bold">${this.generatePrice('8')}</p>
            </Col>
        ))
        return (
            <>
                <Container className="bg-white my-5 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <Row>
                        <Col xs={12}>
                            <h1 className="title fw-bold my-3">{this.state.title}</h1>
                        </Col>
                        <Col sm={4} className="mx-auto d-flex justify-content-center">
                            <img className="img-thumbnail mb-5" src={`./img/${this.state.title}.jpg`} alt={this.state.title}/>
                        </Col>
                    </Row>
                    <Container className="mb-5">
                        <Row>
                            <Col className="mx-auto d-flex justify-content-center">
                                <Button onClick={() => this.changeToBreakfast()} variant="dark" size="lg">See Our Breakfast Options</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.changeToLunch()} variant="dark" size="lg">See Our Lunch Options</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.changeToDinner()} variant="dark" size="lg">See Our Dinner Options</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Row md={2} className="px-5 mb-3">
                        {newFood}
                    </Row>
                    <Row className="px-5">
                        <Col xs={12}>
                            <h1 className="title fw-bold mb-4">Beverages</h1>
                        </Col>
                        {newDrink}
                    </Row>
                </Container>
            </>
        )
    }
};
export default Menu;