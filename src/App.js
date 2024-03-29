import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";



class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            data={this.state.data}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
             
              {
                name: "Email",
                prop: "email"
              },
              {
                name: "Password",
                prop: "password"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;



