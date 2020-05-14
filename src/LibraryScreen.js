import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Book from './Component/Book'
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
      author: "JKM"
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
setAuthor(aut){
  this.setState({ author: aut })
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
            onChange={e => this.setAuthor(e)}
          />
          <Book
            autor={this.state.author}
            title={"JP Słowacki"}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryScreen;