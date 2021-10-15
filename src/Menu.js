import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import MenuItem from './MenuItem';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {foodType: '1', title: 'Breakfast'};
        this.changeMenuType = this.changeMenuType.bind(this);
    };

    // async fetchMenu() {
    //     let newItem = await axios.get(`${this.baseAPI_URL}type_amount/${this.state.foodType}/3`);
    //         this.setState({ foods: newItem.data });
    // };

    changeMenuType() {
        console.log('Menu changed!');
        this.setState({foodType: '3', title: 'Lunch'});
        this.forceUpdate();
    };

    render() {
        return (
            <>
                <Container className="bg-white my-5 mx-auto">
                    <Row>
                        <Col>
                            <h1 className="title fw-bold my-4">{this.state.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-4"><MenuItem type={this.state.foodType}/></div>
                        <div className="col-lg-4"><img className="img-thumbnail" src="./img/Breakfast.jpg" alt={this.state.title}/></div>
                        <div className="col-lg-4"><MenuItem type={this.state.foodType}/></div>
                    </Row>
                    <Row>
                        <div className="col-lg-4"><MenuItem type={this.state.foodType}/></div>
                        <Col className="d-flex align-items-center">
                            <Stack gap={3} className="col-md-5 mx-auto align-self-center">
                                <Button variant="dark" size="lg" disabled>See Our Breakfast Options</Button>
                                <Button onClick={this.changeMenuType} variant="dark" size="lg">See Our Lunch Options</Button>
                                <Button variant="dark" size="lg">See Our Dinner Options</Button>
                            </Stack>
                        </Col>
                        <div className="col-lg-4 mb-3"><MenuItem type={this.state.foodType}/></div>
                    </Row>
                    <Row>
                        <div className="col-lg-4"><MenuItem type={this.state.foodType}/></div>
                        <Col>
                            <h1 className="title fw-bold mb-3">Beverages</h1>
                            <MenuItem type='8'/>
                        </Col>
                        <div className="col-lg-4 mb-3"><MenuItem type={this.state.foodType}/></div>
                    </Row>
                </Container>
            </>
        )
    }
};
export default Menu;