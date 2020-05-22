import React, { Component, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';

//Może ten alert jakoś wykorzystasz
// function AlertDismissible() {
//     const [show, setShow] = useState(true);

//     return (
//         <>
//             <Alert show={show} variant="success">
//                 <Alert.Heading>How's it going?!</Alert.Heading>
//                 <p>
//                     Duis mollis
//                 </p>
//                 <Form>
//                     <Form.Group as={Row} controlId="validationTitle">
//                         <Form.Label column sm={2}> Podaj tytuł </Form.Label>
//                         <Col sm={2}>
//                             <Form.Control
//                                 required
//                                 type="text"
//                                 name="title"
//                                 placeholder="Tytuł"
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 Podaj tytuł!
//                             </Form.Control.Feedback>
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="validationAuthor">
//                         <Form.Label column sm={2}> Podaj autora </Form.Label>
//                         <Col sm={2}>
//                             <Form.Control
//                                 required
//                                 type="text"
//                                 name="author"
//                                 placeholder="Autor"
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 Podaj autora!
//                             </Form.Control.Feedback>
//                         </Col>
//                     </Form.Group>

//                 </Form>
//                 <hr />
//                 <div className="d-flex justify-content-end">
//                     <Button onClick={() => setShow(false)} variant="outline-success">
//                         Close me ya'll!
//                     </Button>
//                 </div>
//             </Alert>

//             {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

//         </>
//     );
// }

class ManagementBooks extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

   async loadData() {
        const zmienna = this.state.value;
        //  { headers: {"Authorization" : `Bearer ${token}`} }
        //przyklad: http://34.90.183.236:8080/books?search=title%sierotka,status:available
         const data = await  axios.get(`http://34.90.183.236:8080/books`,{ headers: {"Authorization" :  `Bearer ${this.props.token}` }})
   return await data.data;
           
        // const url = new URL("http://34.90.183.236:8080/books"),
        //     params = { search: "title%" + zmienna };
        // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        // fetch(url)
        //     .then(results => {
        //         return results.json();
        //     }).then(data => {
        //         this.showData(data)

        //         this.setState({ books: data });
        //         console.log("state", this.state.books)
        //     })
    }

    handleDelete(book) {
        console.log(book);
        axios.delete(`http://34.90.183.236:8080/books/${book}`)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    alert("Usunięto ksążkę")
                }
            }).catch(function (error) {
                console.log(error);
            })

        this.setState(state => {
            state.books = book;
            return state;
        })
    }


showData(){

 this.loadData().then(data =>{
        console.log("wpadada",data);
   
      let books =  data.map((book) => {
                return (
                    <tr key={book.id}>
                    
                        <td>{book.author}</td>
                        <td>{book.title}</td>
                        <td>{book.genre}</td>
                        <td>{book.isbn}</td>
                        <td>{book.releaseDate}</td>
                        <td><Button variant="outline-success"  disabled ={book.status === "RESERVED" || book.status === "BORROWED"} >{book.status === "RESERVED" ? "Zarezerwowana" : book.status === "BORROWED" ? "Wypożyczona":"Edytuj"} </Button>{' '}</td>
                        <td><Button variant="danger" onClick={() => this.handleDelete(book.id)} disabled ={book.status === "RESERVED" || book.status === "BORROWED"}>Usuń</Button></td>
                    </tr>
                )
            })
            this.setState({ books})
        }
    
    ).catch(err => {console.log(err)});
       
}

    handleSearch(event) {
        this.showData()
    }

    render() {
        return (
            <div>
                <p>Podaj tytuł ksiązki</p>
                <Navbar className="bg-light justify-content-center">
                    <Form inline>
                        <FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Wpisz tytuł książki" className=" mr-sm-4" />
                        <Button variant="primary" onClick={(event) => this.handleSearch(event)}>Szukaj</Button>
                    </Form>
                </Navbar>
                <br />
                <h1>Wyszukane książki</h1>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Tytuł</th>
                            <th>Gatunek</th>
                            <th>ISBN</th>
                            <th>Data wydania</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books}
                    </tbody>
                </Table>
                {/* <AlertDismissible /> */}
            </div>


        )
    }



}
export default ManagementBooks;