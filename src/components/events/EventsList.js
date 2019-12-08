import React from "react";
import EventCard from "./EventCard";

const EventsList = () => {
  return (
    <div className="container row">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventsList;
