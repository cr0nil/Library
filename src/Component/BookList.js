import React, { Component } from 'react';
import Frame from 'react-frame-component';
import Book from './Book';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
var config = {
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Access-Control-Allow-Credentials': true
    }
};
class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy',
            books: []
        }

    }

    componentDidMount() {


        // var x = [];
        // this.props.data.then(function (result) {
        //     console.log("boobks",result)
        //     x =   result
        // })
        console.log("boobksx", this.doSomething())
        
        this.gett()

    }

    async gett() {
        let result = await this.doSomething();
         this.setState({
            books : result
        })
        console.log("assdadad21", this.state.books)
    }

    doSomething() {
        let x = this.props.data.then(function (result2) {
            return result2
        });
        return x

    }

    renderTableData() {
        return this.state.books.map(user => (
            <tr>
                
                <td>{user.title}</td>
                <td>{user.author}</td>
                <td>{user.genre}</td>
                <td>{user.isbn}</td>
                <td>{user.releaseDate}</td>
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
