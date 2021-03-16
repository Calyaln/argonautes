import React, { Component } from "react";

class ArgonautesList extends React.Component {
  render() {
    return (
      <>
        <h2>Membres de l'équipage</h2>
        <ul className="member-list">
          {this.props.argonautesList.map((argonaute) => {
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
