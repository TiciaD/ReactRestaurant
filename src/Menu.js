import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import MenuItem from './MenuItem';
import axios from 'axios';
import './Menu.css';

class Menu extends Component {
    // Model
    constructor(props) {
        super(props);
        this.state = {
            foodType: '1',
            title: 'Breakfast',
            foods: [],
            drinks: []
        };
        this.baseAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/";
    };


    // Controller
    async componentDidMount() {
        const [Foods1, Foods2, Foods3, Foods4, Foods5, Foods6, drinks] = await Promise.all([
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`),
            axios.get(`${this.baseAPI_URL}type_amount/8/3`)
        ])

        let newFoods = [];
        newFoods.push(Foods1.data);
        newFoods.push(Foods2.data);
        newFoods.push(Foods3.data);
        newFoods.push(Foods4.data);
        newFoods.push(Foods5.data);
        newFoods.push(Foods6.data);

        this.setState({
            foods: newFoods,
            drinks: drinks.data
        });
    };

    // changeMenuType() {
    //     console.log('Menu changed!');
    //     this.setState({ foodType: '3', title: 'Lunch' });
    //     this.forceUpdate();
    // };

    render() {
        // View
        return (
            <>
                <Container className="bg-white my-5 mx-auto">
                    <Row>
                        <Col>
                            <h1 className="title fw-bold my-4">{this.state.title}</h1>
                        </Col>
                    </Row>
                    {
                        this.state.foods.length > 0 &&
                        <>
                            <Row>
                                <div className="col-lg-4">
                                    {this.state.foods[0].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index} />)}
                                </div>
                                <div className="col-lg-4">
                                    <img className="img-thumbnail" src="./img/Breakfast.jpg" alt={this.state.title} />
                                </div>
                                <div className="col-lg-4">
                                    {this.state.foods[1].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index+10} />)}
                                </div>
                            </Row>
                            <Row>
                                <div className="col-lg-4">
                                    {this.state.foods[2].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index+20} />)}
                                </div>
                                <Col className="d-flex align-items-center">
                                    <Stack gap={3} className="col-md-5 mx-auto align-self-center">
                                        <Button variant="dark" size="lg" disabled>See Our Breakfast Options</Button>
                                        <Button onClick={this.changeMenuType} variant="dark" size="lg">See Our Lunch Options</Button>
                                        <Button variant="dark" size="lg">See Our Dinner Options</Button>
                                    </Stack>
                                </Col>
                                <div className="col-lg-4 mb-3">
                                    {this.state.foods[3].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index+30} />)}
                                </div>
                            </Row>
                            <Row>
                                <div className="col-lg-4">
                                    {this.state.foods[4].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index+40} />)}
                                </div>
                                <Col>
                                    <h1 className="title fw-bold mb-3">Beverages</h1>
                                    {this.state.drinks.map((item, index)=> <MenuItem type='8' data={item} key={index+50} />)}
                                </Col>
                                <div className="col-lg-4 mb-3">
                                    {this.state.foods[5].map((item, index)=> <MenuItem type={this.state.foodType} data={item} key={index+60} />)}
                                </div>
                            </Row>
                        </>
                    }
                </Container>
            </>
        )
    }
};
export default Menu;