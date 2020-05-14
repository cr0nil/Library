import React, { Component } from 'react';
import './App.css';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout
*/

/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';




// var apiBaseUrl = "http://localhost:4000/api/";
// var request = require('superagent');

class LibraryScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      role:'użytkownik',
      printingmessage:'',
      draweropen:true,
    }
  }
  componentWillMount(){
 
  }
  toggleDrawer(event){
    // console.log("drawer click");
    this.setState({draweropen: !this.state.draweropen})
  }


 

handleClick(event){
  // console.log("handleClick",event);
  this.setState({printingmessage:"Krowin na wolno"})

}
handleDivClick(event){
  // console.log("event",event);
  if(this.state.draweropen){
    this.setState({draweropen:false})
  }
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
           <RaisedButton disabled={this.state.printButtonDisabled} label="OK" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
      </MuiThemeProvider>
          </div>
          </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LibraryScreen;