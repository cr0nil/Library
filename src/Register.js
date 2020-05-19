
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }
  handleClick(event, role) {
    var apiBaseUrl = "http://localhost:4000/api/";

    var self = this;

    if (this.state.first_name.length > 0 && this.state.last_name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
      var payload = {
        "Imię": this.state.first_name,
        "Nazwisko": this.state.last_name,
        "Email": this.state.email,
        "Hasło": this.state.password,
        "role": role
      }

      axios.post(apiBaseUrl + '/register', payload)
        .then(function (response) {
          console.log(response);
          if (response.data.code === 200) {
            //  console.log("registration successfull");
            var loginscreen = [];
            loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role} />);
            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
              loginscreen: loginscreen,
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true
            });
          }
          else {
            console.log("some error ocurred", response.data.code);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      alert("Input field value is missing");
    }

  }
  
  render() {
    // console.log("props",this.props);
    var userhintText, userLabel;
    if (this.props.role === "użytkownik") {
      userhintText = "Podaj swój email";
      userLabel = "Email";
    }
    else {
      userhintText = "Podaj swój email";
      userLabel = "Email";
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Rejestracja"
            />
            <TextField
              hintText="Podaj imię"
              floatingLabelText="Imię"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
            />
            <br />
            <TextField
              hintText="Podaj nazwisko"
              floatingLabelText="Nazwisko"
              onChange={(event, newValue) => this.setState({ last_name: newValue })}
            />
            <br />
            <TextField
              hintText={userhintText}
              floatingLabelText={userLabel}
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Podaj hasło"
              floatingLabelText="Hasło"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Zarejestruj" primary={true} style={style} onClick={(event) => this.handleClick(event, this.props.role)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;