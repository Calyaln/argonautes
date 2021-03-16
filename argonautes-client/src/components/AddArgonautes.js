import React, { Component } from "react";
import axios from "axios";
import ApiHandler from "../api/apiHandler";

const api = new ApiHandler();

class AddArgonautes extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);

    api
      .post("/api/argonautes", {
        name: this.state.name,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nom de l&apos;Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Envoyer</button>
        </form>
      </>
    );
  }
}

export default AddArgonautes;
