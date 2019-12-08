import React, { Component } from "react";
import EventsList from "../events/EventsList";

class Homescreen extends Component {
  render() {
    return (
      <div className="dashboard container h2">
        <br></br>
        Unique activities and experiences hosted by locals <br></br>
        <div>
          <EventsList></EventsList>
        </div>
      </div>
    );
  }
}

export default Homescreen;
