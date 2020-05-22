import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ManagementBooks from './Component/ManagementBooks';
import AddBook from './Component/AddBook';
import ReservationsBook from './Component/ReservationsBook';
import {Card, Tab} from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';


import axios from 'axios';
var apiBaseUrl = "http://34.90.183.236:8080/books";
// var request = require('superagent');
var config = {
  headers: {"Access-Control-Allow-Origin": "http://localhost:3000/",
  'Access-Control-Allow-Credentials':true}
};
class LibraryMenScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'bib lio te karz',
      draweropen: true,
      author: "JKM",
      showB: false,
      data: []
    }
  }
  componentDidMount(){
 console.log(this.props.token)
  }

 

  render() {
    return (
      <div className="App">
        <div>
            <div>
                <Card>
                    <Card.Body>Zalogowany jako czytelnik {this.props.name}</Card.Body>
                </Card>
            </div>

          {/*<MuiThemeProvider>*/}
          {/*  <RaisedButton disabled={this.state.printButtonDisabled} label="OK" primary={true} style={style} onClick={(event) => this.handleClick(event)} />*/}
          {/*</MuiThemeProvider>*/}
        </div>

        <Tabs defaultActiveKey="management" id="uncontrolled-tab-example">
          <Tab eventKey="management" title="Zarządzanie książkami">
          <ManagementBooks token = {this.props.token}/>
          </Tab>
          <Tab eventKey="add" title="Dodaj książkę">
          <AddBook token = {this.props.token}/>
          </Tab>
          <Tab eventKey="reservation" title="Wypożyczenia/Zwroty" >
          <ReservationsBook token = {this.props.token}/>
          </Tab>
        </Tabs>




      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryMenScreen;
