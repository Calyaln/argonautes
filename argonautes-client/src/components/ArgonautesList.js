import React, { Component } from "react";
import ApiHandler from "../api/apiHandler";

const api = new ApiHandler();

class ArgonautesList extends React.Component {
  state = {
    argonautes: [],
  };

  // to make the api call
  componentDidMount() {
    api
      .get("/api/argonautes")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({
          argonautes: apiResponse.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h2>Membres de l'équipage</h2>
        <ul className="member-list">
          {this.state.argonautes.map((argonaute) => {
            return (
              <li className="member-item" key={argonaute._id}>
                {argonaute.name}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ArgonautesList;
