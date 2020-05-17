import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Book from './Component/Book';
import BookList from './Component/BookList';
import ReactSearchBox from 'react-search-box';


// var apiBaseUrl = "http://localhost:4000/api/";
// var request = require('superagent');

class LibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'użytkownik',
      printingmessage: '',
      draweropen: true,
      author: "JKM",
      showB: false
    }
  }


  data = [
    {
      key: 'Adam',
      value: 'Adam Mickiwicz',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]


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
  render() {
    return (
      <div className="App">
        <div onClick={(event) => this.handleDivClick(event)}>
          <center>
            <div>
              Sprawdź to {this.state.role}
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
        <MuiThemeProvider>
          <ReactSearchBox
            placeholder="Wyszukaj książkę"

            // onSelect = {e => this.setAuthor(e)}
            data={this.data}
            onSelect={e => this.setAuthor(e)}
            onChange={e => this.clean(e)}
          />
          <RaisedButton disabled={this.state.printButtonDisabled} label="Szukaj" primary={true} style={style} onClick={(event) => this.showBook(event)} />
        </MuiThemeProvider>
        <div>
<BookList/>
          {/* {this.showBook()} */}
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryScreen;