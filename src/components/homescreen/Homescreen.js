import React, { Component } from "react";
import EventsList from "../events/EventsList";

class Homescreen extends Component {
  render() {
    return (
      <div className="dashboard container">
        <br></br>
        <div className=" display-5">Unique experiences hosted by locals.</div>
        <div className=" display-5">Select an event below for more details.</div> <br></br>
        <div>
          <EventsList></EventsList>
        </div>
      </div>
    );
  }
}

export default Homescreen;
