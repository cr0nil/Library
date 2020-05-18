import React, { Component } from 'react';
import Frame from 'react-frame-component';
import Book from './Book';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy'
        }
    }

    renderTableData() {
        return users.map(user => (
                <tr>
                    <td>{user.author}</td>
                    <td>{user.title}</td>
                    <td>{user.genre}</td>
                    <td>{user.isbn}</td>
                    <td>{user.relase_date}</td>
                    <td><Button variant="outline-primary">Wypożycz</Button>{' '}</td>
                </tr>
            )
        )
    }

    render() {
        return (
            // <ul>
            //     {users.map(user => (
            //         <li key={user.id}>
            //             <Book
            //             autor = {user.name}/>
            //         </li>
            //     ))}
            // </ul>

            <div>
                <h1>Książki</h1>
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
                    {this.renderTableData()}
                    </tbody>
                </Table>
            </div>


        )
    }
}
export default BookList;
// ta lista przychodzi z backendu
const users = [
    {
        id: 1,
        author: 'Robin Williams',
        title: 'teacher',
        genre: 'bajka',
        isbn: '12345',
        relase_date: '11-11-1111'

    },
    {
        id: 2,
        author: 'John Doe',
        title: 'cos',
        genre: 'bajka',
        isbn: '12345',
        relase_date: '11-11-1111'
    },
];