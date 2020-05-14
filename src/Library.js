import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LoginScreen from './LoginScreen';
import LibraryScreen from './LibraryScreen'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ReactSearchBox from 'react-search-box';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { draweropen: false, currentScreen: [] };
  }

  data = [
    {
      key: 'john',
      value: 'John Doe',
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


  componentDidMount() {
    var currentScreen = [];
    currentScreen.push(<LibraryScreen appContext={this.props.appContext} role={this.props.role} />);
    this.setState({ currentScreen })
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
        <ReactSearchBox
        placeholder="Placeholder"
        value="Szukaj ksiązki"
        data={this.data}
        callback={record => console.log(record)}
      />
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