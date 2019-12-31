import React from "react";
import { NavLink} from 'react-router-dom';

const EventCard = ({data}) => {
  return (
    <div className=" ">

      <div className="">
        <img
          className="card-img-top"
          src={data.img}
          alt={"Card image cap"}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.details}
          </p>
          <NavLink to= "/event/id" className="btn btn-primary">Book</NavLink>
        </div>
        </div>
      </div>
  );
};

export default EventCard;
