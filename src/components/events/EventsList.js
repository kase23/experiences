import React from "react";
import EventCard from "./EventCard";

const EventsList = ({data}) => {
  return (
 
             <div className="row">
              { data.map(eventcard => {
                  return (<div className="col-md-4 mt-4">
                    <div className='card card-raised '>
                    <EventCard data={eventcard} />
</div>
                  </div>)
                })
              }
            </div>
  );
};

export default EventsList;
