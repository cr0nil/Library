import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Book from './Component/Book';
import BookList from './Component/BookList';
import SearchBook from './Component/SearchBook';
import ReactSearchBox from 'react-search-box';
import jkm from './jkm.jpg'


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
      printingmessage: '',
      draweropen: true,
      author: "JKM",
      showB: false,
      data: []
    }
  }
  componentDidMount(){
 
  }
 
 

  render() {
    return (
      <div className="App">
        <div onClick={(event) => this.handleDivClick(event)}>
          <center>
            <div>
              Sprawdź to {this.props.role}
            </div>

            <div>
              Myśl uwolniona:
          {this.state.filesPreview}
            </div>
          </center>
          <div>
            {this.state.printingmessage}
          </div>
          <MuiThemeProvider>
            <RaisedButton disabled={this.state.printButtonDisabled} label="OK" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </MuiThemeProvider>
        </div>
        <img src={jkm} />
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryMenScreen;
