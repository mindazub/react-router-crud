import React from 'react';
import '../App.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

class ProductsEdit extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        }
    };

    render() {
        return (
            <div className="col-md-10">
                <h1>Products Edit</h1>

                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Name
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" value="{this.products.name}"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEAN">
                        <Form.Label column sm={2}>
                            EAN
                </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="EAN" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalType">
                        <Form.Label column sm={2}>
                            Type
                </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Type" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalWeight">
                        <Form.Label column sm={2}>
                            Weight
                </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="integer" placeholder="Weight" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalColor">
                        <Form.Label column sm={2}>
                            Color
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="integer" placeholder="Color" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalQuantity">
                        <Form.Label column sm={2}>
                            Quantity
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="integer" placeholder="Quantity" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrice">
                        <Form.Label column sm={2}>
                            Price
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="integer" placeholder="Price" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCheck">

                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Active" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Update a Product</Button>
                        </Col>
                    </Form.Group>
                </Form>


            </div>

        );
    }
}

export default ProductsEdit;
