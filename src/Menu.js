import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from './MenuItem';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {foodType: '1', title: 'Breakfast'};
    };

    changeMenuType() {};

    render() {

        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h2>{this.state.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col><MenuItem type={this.state.foodType}/></Col>
                    </Row>
                    <Row>
                        <Col><MenuItem type='8'/></Col>
                    </Row>
                </Container>
            </>
        )
    }
};
export default Menu;