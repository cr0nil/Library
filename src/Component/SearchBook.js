import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



class SearchBook extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
            let users = data.map((user) => {
                return (
                    <tr key={user.id}>
                        <td>{user.author}</td>
                        <td>{user.title}</td>
                        <td>{user.genre}</td>
                        <td>{user.isbn}</td>
                        <td>{user.releaseDate}</td>
                        <td><Button variant="outline-primary"  disabled ={user.status === "RESERVED" || user.status === "BORROWED"} >{user.status === "RESERVED" ? "Zarezerwowana":"Wypożycz" || user.status === "BORROWED" ? "Wypożyczona":"Wypożycz"} </Button>{' '}</td>
                    </tr>
                )
            })
            this.setState({ users: users });
            console.log("state", this.state.users)
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
                    {this.state.users}
                    </tbody>
                </Table>
            </div>


        )
    }
}
export default SearchBook;