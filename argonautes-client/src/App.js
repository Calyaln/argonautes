import React, { Component } from "react";
import "./App.css";
import AddArgonautes from "./components/AddArgonautes";
import ArgonautesList from "./components/ArgonautesList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApiHandler from "./api/apiHandler";

const api = new ApiHandler();

class App extends React.Component {
  state = {
    argonautes: [],
  };

  // to make the api call
  componentDidMount() {
    api
      .get("/api/argonautes")
      .then((apiResponse) => {
        //console.log(apiResponse);
        this.setState({
          argonautes: apiResponse.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onAddArgonaute = (value) => {
    //console.log(value);
    this.setState({
      argonautes: [value, ...this.state.argonautes],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddArgonautes addArgonaute={this.onAddArgonaute} />
        <ArgonautesList argonautesList={this.state.argonautes} />
        <Footer />
      </div>
    );
  }
}

export default App;
