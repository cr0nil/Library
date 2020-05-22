import React, { Component, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class EditBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true ,
            setShow: true
        }
        this.author2 = React.createRef();
        this.title2 = React.createRef();

    }

    setShow(show){
        this.setState({
            show
        })
        var apiBaseUrl = `http://34.90.183.236:8080/books/${this.props.book.id}`;
        let body = {
            title: this.title2.current.value,
            author: this.author2.current.value,
        }
        axios.put(apiBaseUrl, body,{ headers: {"Authorization" :  `Bearer ${this.props.token}` }})
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                alert("edytowano ksążkę")
            }
        }).catch(function (error) {
        console.log(error);
    })

    }
    render() {
        console.log(this.props.book.title)
        return (
            <>
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis
                </p>
                    <Form>
                        <Form.Group as={Row} controlId="validationTitle">
                            <Form.Label column sm={2}> Podaj tytuł </Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    required
                                    type="text"
                                    name="title"
                                    defaultValue={this.props.book.title}
                                    placeholder= "Tytuł"
                                    ref={this.title2}
                                /> 
                                <Form.Control.Feedback type="invalid">
                                    Podaj tytuł!
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="validationAuthor">
                            <Form.Label column sm={2}> Podaj autora </Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    required
                                    type="text"
                                    name="author"
                                    defaultValue={this.props.book.author}
                                    placeholder="Tytuł"
                                    
                                    ref={this.author2}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Podaj autora!
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                    </Form>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.setShow(false)} variant="outline-success">
                            Close me ya'll!
                    </Button>
                    </div>
                </Alert>

                {!this.state.show && <Button onClick={() => this.setShow(true)}>Show Alert</Button>}

            </>
        );
    }
}
export default EditBookComponent;