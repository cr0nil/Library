import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



class ManagementBooks extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleDelete(event) {
        console.log();

    }


    handleClick(event) {
        const zmienna = this.state.value;
        //przyklad: http://34.90.183.236:8080/books?search=title%sierotka,status:available
        const url = new URL("http://34.90.183.236:8080/books"),
            params = {search: "title%"+zmienna};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {
            let books = data.map((book) => {
                return (
                    <tr key={book.id}>
                        <td>{book.author}</td>
                        <td>{book.title}</td>
                        <td>{book.genre}</td>
                        <td>{book.isbn}</td>
                        <td>{book.releaseDate}</td>
                        <td><Button variant="outline-primary"  disabled ={book.status === "RESERVED" || book.status === "BORROWED"} >{book.status === "RESERVED" ? "Zarezerwowana" : book.status === "BORROWED" ? "Wypożyczona":"Wypożycz"} </Button>{' '}</td>
                        <td><Button variant="danger" onClick={(event) => this.handleDelete(event)} disabled ={book.status === "RESERVED" || book.status === "BORROWED"}>Usuń</Button></td>
                    </tr>
                )
            })
            this.setState({ books: books });
            console.log("state", this.state.books)
        })
    }

    render() {
        return (
            <div>
                <p>Podaj tytuł ksiązki</p>
                <Navbar className="bg-light justify-content-center">
                    <Form inline>
                        <FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Wpisz tytuł książki" className=" mr-sm-4" />
                        <Button variant="primary" onClick={(event) => this.handleClick(event)}>Szukaj</Button>
                    </Form>
                </Navbar>
                <br/>
                <h1>Wyszukane książki</h1>
                <br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Tytuł</th>
                        <th>Autor</th>
                        <th>Gatunek</th>
                        <th>ISBN</th>
                        <th>Data wydania</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.books}
                    </tbody>
                </Table>
            </div>


        )
    }



}
export default ManagementBooks;