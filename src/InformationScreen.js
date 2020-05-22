import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Button, Form, FormControl, Table} from "react-bootstrap";
import axios from "axios";






class InformationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };

    }

    async loadData() {
        const zmienna = this.props.email
        console.log(zmienna)
        const data = await axios.get(`http://34.90.183.236:8080/reservations`, { headers: { "Authorization": `Bearer ${this.props.token}` }, params: {email: zmienna} })
        return await data.data;

    }

    showData() {

        this.loadData().then(data => {

                let users = data.map((user) => {
                    return (
                        <tr key={user.reservationId}>
                            <td>{user.bookAuthor}</td>
                            <td>{user.bookTitle}</td>
                            <td>{user.bookGenre}</td>
                            <td>{user.bookIsbn}</td>
                            <td>{user.bookReleaseDate}</td>
                            <td>{user.reservationDate}</td>
                            <td>{user.bookStatus === "RESERVED" ? "Zarezerwowana" : user.bookStatus === "BORROWED" ? "Wypożyczona":"Dostepna"}</td>
                        </tr>
                    )
                })
                this.setState({ users })
            }

        ).catch(err => { console.log(err) });

    }



    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-center">
                    <Form inline>
                        <Button variant="primary" onClick={(event) => this.showData(event)}>Szukaj</Button>
                    </Form>
                </Navbar>
                {this.props.email}
                {this.props.name}
                {this.props.lastName}
                {this.props.numBorrowed}
                {this.props.cashPenalty}

                <br/>
                <h1>Twoje książki</h1>
                <br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Tytuł</th>
                        <th>Gatunek</th>
                        <th>ISBN</th>
                        <th>Data wydania</th>
                        <th>Data wypożyczenia</th>
                        <th>Status</th>
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
export default InformationScreen;