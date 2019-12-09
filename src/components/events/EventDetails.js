import React from "react";

function EventDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section">
      <br></br>
      <div className="card col">
        <img
          className="card-img-top"
          src="https://i2.wp.com/www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2013/03/MP900430580.jpg?resize=768%2C510&ssl=1"
          alt={"Card image cap"}
        />

        <div className="card-body">
          <h5 className="card-title">Event {id} Details</h5>
          <p className="card-text">
            Example summary of event Date Time etc etc etx
          </p>
          <a href="#" className="btn btn-primary">
            Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
