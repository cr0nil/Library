import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {draweropen: false,currentScreen:[]};
  }

  /**
   * Toggle opening and closing of drawer
   * @param {*} event 
   */ 
 
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="Biblioteka Page"
          
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.draweropen}>
            <MenuItem>
              <div>
              User Profile
              <a href="#"><FontIcon
                className="material-icons drawerclosebutton"
                color={blue500}
                styles={{ top:10,}}
                onClick={(event) => this.toggleDrawer(event)}
              >clear</FontIcon></a>
              </div>
            </MenuItem>
              <div>
           
              </div> 
          </Drawer>
        </MuiThemeProvider>
        <div>
          {this.state.currentScreen}
        </div>
      </div>
    );
  }
}

export default Library;