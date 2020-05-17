import React, { Component } from 'react';
import Frame from 'react-frame-component';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy'
        }
    }
    
    render() {
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Book 
                        autor = {user.name}/>
                    </li>
                ))}
            </ul>)
    }
}
export default BookList;
// ta lista przychodzi z backendu
const users = [
    {
        id: 1,
        name: 'Robin Williams',
        occupation: 'teacher',
        //dopisa
    },
    {
        id: 2,
        name: 'John Doe',
        occupation: 'gardener',
    },
];