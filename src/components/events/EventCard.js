import React from "react";
import { NavLink} from 'react-router-dom';

const EventCard = () => {
  return (
    <div className="row ">
     <div className="col">
      <div className="card ">
        <img
          className="card-img-top"
          src="https://i2.wp.com/www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2013/03/MP900430580.jpg?resize=768%2C510&ssl=1"
          alt={"Card image cap"}
        />
        <div className="card-body">
          <h5 className="card-title">Event Sample One</h5>
          <p className="card-text">
            Example summary of event Date Time etc etc etx
          </p>
          <NavLink to="/event/:id"  className="btn btn-primary">Book</NavLink>
        </div>
        </div>
      </div>
      <div className="col">
      <div className="card ">
        <img
          className="card-img-top"
          src="https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Event Sample Two</h5>
          <p className="card-text">
            Some quick example text to build on the card
          </p>
                    <NavLink to="/event/:id"  className="btn btn-primary">Book</NavLink>
        </div>
      </div>
      </div>

<div className="col">
      <div className="card ">
        <img
          className="card-img-top"
          src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fa-7ng0Wicx7F2ZyFVuoAyQ%252FGettyImages-655976164.jpg&width=1200&quality=80"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Event Sample three</h5>
          <p className="card-text">
            and make up the bulk of the card's content.
          </p>
          <NavLink to="/event/:id"  className="btn btn-primary">Book</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventCard;
