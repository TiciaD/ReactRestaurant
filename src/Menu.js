import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from './MenuItem';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {drinks: []}
        this.baseAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/";
    }
    async componentDidMount() {
        let beverages = await axios.get(`${this.baseAPI_URL}type_amount/8/5`);
            this.setState({ drinks: beverages.data });
            for (let i = 0; i < beverages.data.length; i++) {
            console.log(beverages.data[i].name);
            <h2>{beverages.data[i].description}</h2>
            }   
    }

    render() {
        const newDrink = this.state.drinks.map((item, i) => (
            <div>
                <h5>{ item.name }</h5>
                <p>{ item.description }</p>
            </div>
        ));
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>Beverages</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{ newDrink }</Col>
                    </Row>
                    <Row>
                        <Col><MenuItem type='1'/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Menu;