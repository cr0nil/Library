import React, { Component, useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Button, Form, Row, Col} from "react-bootstrap";


function AddBookForm() {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="validationTitle">
                    <Form.Label column sm={2}> Podaj tytuł </Form.Label>
                    <Col sm={2}>
                    <Form.Control
                        required
                        type="text"
                        name="title"
                        placeholder="Tytuł"
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
                        />
                        <Form.Control.Feedback type="invalid">
                            Podaj datę!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 2, offset: 2 }}>
                    <Button type="submit">Dodaj książkę</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://34.90.183.236:8080/books', {
            method: 'POST',
            body: data,
        });
    }


    render() {
        return (
            <div>
                <br/>
                <br/>
                <AddBookForm/>
            </div>
        )
    }


}
export default AddBook;