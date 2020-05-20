import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
import LoginScreen from './LoginScreen';
import LibraryScreen from './LibraryScreen';
import LibraryMenScreen from './LibraryMenScreen';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { draweropen: false, currentScreen: [] };
  }

  

  componentDidMount() {
    var currentScreen = [];
    if(this.props.role === "użytkownik"){
      console.log("token",this.props.token);
      currentScreen.push(<LibraryScreen appContext={this.props.appContext} role={this.props.role} />);
      this.setState({ currentScreen })
    }else{
      currentScreen.push(<LibraryMenScreen appContext={this.props.appContext} role={this.props.role} />);
      this.setState({ currentScreen })
    }
   
  }

  toggleDrawer = () => {
    // console.log("drawer click");

    this.setState({ draweropen: !this.state.draweropen })
  }
  closeDrawer = () => {
    // console.log("drawer click");
    // if (this.state.draweropen == true) {
    //   console.log("asd")
    //   this.setState({ draweropen: false })
    // }

  }

  handleMenuClick(event, page) {
    switch (page) {
      case "openprint":
        // console.log("need to open uploadapge")
        var currentScreen = [];
        currentScreen.push(<LibraryScreen appContext={this.props.appContext} role={this.props.role} />);
        this.setState({ currentScreen })
        break;

      case "logout":
        var loginPage = [];
        loginPage.push(<LoginScreen appContext={this.props.appContext} />);
        this.props.appContext.setState({ loginPage: loginPage, libraryScreen: [] })
        break;
    }
    this.setState({ draweropen: false })
  }
 


  render() {
    return (
      <div className="App">
        <MuiThemeProvider>

          <AppBar title="Biblioteka"
            // onClick={e => this.toggleDrawer(e)}
            onLeftIconButtonClick={this.toggleDrawer}
            // iconElementLeft={ <IconButton onTouchTap={ event => this.toggleDrawer(event) }  >
            //                     <MoreVertIcon />
            //                   </IconButton> }
            isInitiallyOpen={true} />
        </MuiThemeProvider>
      

          <MuiThemeProvider>
          <ClickAwayListener onClickAway={e=>this.closeDrawer()}>
            <Drawer 
             variant="persistent"
           
             open={this.state.draweropen}>
              <MenuItem>
                <div>
                  User Profile
              <a href="#"><FontIcon
                    className="material-icons drawerclosebutton"
                    color={blue500}
                    styles={{ top: 10, }}
                    onClick={(event) => this.toggleDrawer(event)}></FontIcon></a>
                </div>
              </MenuItem>
              <div>
                <MenuItem onClick={(event) => this.handleMenuClick(event, "openprint")}>
                  xxx
              </MenuItem>

                <MenuItem onClick={(event) => this.handleMenuClick(event, "logout")}>
                  Logout
              </MenuItem>
              </div>
            </Drawer>
            </ClickAwayListener>
          </MuiThemeProvider>
      
        <div>
          {this.state.currentScreen}
        </div>
      </div>
    );
  }
}

export default Library;