import React, { Component, useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Button, Form, Row, Col } from "react-bootstrap";
import { RaisedButton } from 'material-ui';
import axios from 'axios';
class AddBook extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            validated: false,
            setValidated: false
        }
        this.relaseDate = React.createRef();
        this.author = React.createRef();
        this.title = React.createRef();
        this.genre = React.createRef();
        this.isbn = React.createRef();
    }


    handleSubmits = (event) => {
        console.log("asd2")
        let form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({
            validated: true
        })
        this.handleSubmit(event)
    };
    addBookForm() {



        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmits}>
                <Form.Group as={Row} controlId="validationTitle">
                    <Form.Label column sm={2}> Podaj tytuł </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            required
                            type="text"
                            name="title"
                            placeholder="Tytuł"
                            ref={this.title}
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
                            placeholder="Autor"
                            ref={this.author}
                        />
                        <Form.Control.Feedback type="invalid">
                            Podaj autora!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="validationGenre">
                    <Form.Label column sm={2}> Podaj gatunek </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            required
                            type="text"
                            name="genre"
                            placeholder="Gatunek"
                            ref={this.genre}
                        />
                        <Form.Control.Feedback type="invalid">
                            Podaj gatunek!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="validationIsbn">
                    <Form.Label column sm={2}> Podaj ISBN </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            required
                            type="text"
                            name="isbn"
                            placeholder="ISBN"
                            ref={this.isbn}
                        />
                        <Form.Control.Feedback type="invalid">
                            Podaj ISBN!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                {/*Zmiana na react-datepicker*/}
                <Form.Group as={Row} controlId="validationRelaseDate">
                    <Form.Label column sm={2}> Podaj datę wydania </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            required
                            type="text"
                            name="releaseDate"
                            placeholder="Data"
                            ref={this.relaseDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            Podaj datę!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Button onClick={e => this.handleSubmits(e)} >Dodaj książkę</Button>


            </Form>
        );
    }





    handleSubmit = (event) => {
        var apiBaseUrl = "http://34.90.183.236:8080/books";
        event.preventDefault();
        let form = {
            title: this.title.current.value,
            author: this.author.current.value,
            genre: this.genre.current.value,
            isbn: this.isbn.current.value,
            releaseDate:this.relaseDate.current.value
        }

        console.log(form)
        axios.post(apiBaseUrl, form)
            .then(function (response) {
                console.log(response);

             }).catch(function (error) {
                console.log(error);
              })

    }


    render() {
        return (
            <div>
                <br />
                <br />
                {this.addBookForm()}
            </div>
        )
    }


}

const style = {
    margin: 15,
};
export default AddBook;