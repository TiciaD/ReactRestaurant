import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from './MenuItem';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {foodType: '1', title: 'Breakfast'};
    };

    changeMenuType() {};

    render() {

        return (
            <>
                <Container className="bg-white my-5">
                    <Row>
                        <Col>
                            <h1 className="mt-4">{this.state.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-4"><MenuItem type={this.state.foodType}/></div>
                        <div className="col-4"><img className="img-thumbnail" src="./img/Breakfast.jpg" alt={this.state.title}/></div>
                        <div className="col-4"><MenuItem type={this.state.foodType}/></div>
                    </Row>
                    <Row>
                        <div className="col-4"><MenuItem type={this.state.foodType}/></div>
                        <Col>
                            <h2>Beverages</h2>
                            <MenuItem type='8'/>
                        </Col>
                        <div className="col-4"><MenuItem type={this.state.foodType}/></div>
                    </Row>
                </Container>
            </>
        )
    }
};
export default Menu;