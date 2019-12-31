import React from "react";

const data = {title:"Event Sample One",details:"This is a sample details for an event",img:"https://i2.wp.com/www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2013/03/MP900430580.jpg?resize=768%2C510&ssl=1"}

function EventDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section">
      <br></br>
      <div className="card col">
        <img
          className="card-img-top"
          src= {data.img}
          alt={"Card image cap"}
        />

        <div className="card-body">
          <h5 className="card-title">{data.title} Details</h5>
          <p className="card-text">
            {data.details}
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
