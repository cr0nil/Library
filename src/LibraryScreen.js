import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Book from './Component/Book';
import BookList from './Component/BookList';
import SearchBook from './Component/SearchBook';
import ReactSearchBox from 'react-search-box';
import { Card } from 'react-bootstrap';


import axios from 'axios';
var apiBaseUrl = "http://34.90.183.236:8080/books";
// var request = require('superagent');
var config = {
  headers: {"Access-Control-Allow-Origin": "http://localhost:3000/",
  'Access-Control-Allow-Credentials':true}
};
class LibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'użytkownik',
      printingmessage: '',
      draweropen: true,
      author: "JKM",
      showB: false,
      data: []
    }
  }
  componentDidMount(){
    if (!this.state.data) {
      this.getData().then(data => this.setState({data}))
                    .catch(err => { /*...handle the error...*/});
  }
 
  }

  // data = [
  //   {
  //     key: 'Adam',
  //     value: 'Adam Mickiwicz',
  //   },
  //   {
  //     key: 'jane',
  //     value: 'Jane Doe',
  //   },
  //   {
  //     key: 'mary',
  //     value: 'Mary Phillips',
  //   },
  //   {
  //     key: 'robert',
  //     value: 'Robert',
  //   },
  //   {
  //     key: 'karius',
  //     value: 'Karius',
  //   },
  // ]


  toggleDrawer(event) {
    // console.log("drawer click");
    this.setState({ draweropen: !this.state.draweropen })
  }




  handleClick(event) {
    // console.log("handleClick",event);
    this.setState({ printingmessage: "Krowin na wolno" })

  }
  handleDivClick(event) {
    // console.log("event",event);
    if (this.state.draweropen) {
      this.setState({ draweropen: false })
    }
  }
  setAuthor=  (aut)=> {
    console.log("asdasdasdasdadasdasdasd" + aut.value)
    this.setState({
      author: aut.value,
      showB: true
    })
    console.log("asdasdasdasdadasdasdasd" + this.state.author)
  }

  showBook() {
    if (this.state.showB) {
      return (
        <Book
          autor={this.state.author}
          title={"JP Słowacki"}
        />
      )
    }
  }
  clean(e) {
    console.log(e)
    console.log(this.state.author)
    if (e !== this.state.author)
      this.setState({

        showB: false
      })
  }


  async  getData() {
    const data = await  axios.get("http://34.90.183.236:8080/books", config);
    console.log(data.data)
  return await data.data;
  }
  

  render() {
    return (
      <div className="App">
        <div onClick={(event) => this.handleDivClick(event)}>

            <div>
              <Card>
                <Card.Body>Zalogowany jako czytelnik {this.props.name}</Card.Body>
              </Card>
            </div>

          {/*  <div>*/}
          {/*    Myśl uwolniona:*/}
          {/*{this.state.filesPreview}*/}
          {/*  </div>*/}

          <div>
            {this.state.printingmessage}
          </div>
          {/*<MuiThemeProvider>*/}
          {/*  <RaisedButton disabled={this.state.printButtonDisabled} label="OK" primary={true} style={style} onClick={(event) => this.handleClick(event)} />*/}
          {/*</MuiThemeProvider>*/}
        </div>
        {/*<MuiThemeProvider>*/}
        {/*  <ReactSearchBox*/}
        {/*    placeholder="Wyszukaj książkę"*/}

        {/*    // onSelect = {e => this.setAuthor(e)}*/}
        {/*    data={this.data}*/}
        {/*    onSelect={e => this.setAuthor(e)}*/}
        {/*    onChange={e => this.clean(e)}*/}
        {/*  />*/}
        {/*  <RaisedButton disabled={this.state.printButtonDisabled} label="Szukaj" primary={true} style={style} onClick={(event) => this.showBook(event)} />*/}
        {/*</MuiThemeProvider>*/}
    {/*    <div>*/}
    {/*      {console.log("asd",this.state.data)}*/}
    {/*<BookList*/}
    {/*    data =  {this.getData() }/>*/}
    {/*      /!* {this.showBook()} *!/*/}
    {/*    </div>*/}

        <div>
          <br/>
          <SearchBook  token = {this.props.token}/>
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryScreen;