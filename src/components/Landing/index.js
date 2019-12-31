import React from 'react';
import EventsList from "../Events/EventsList";
import SimpleMap from './SimpleMap';

const viewport = {
  width: 400,
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
}

const data = [
  {title:"Event Sample One",details:"This is a sample details for an event",img:"https://i2.wp.com/www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2013/03/MP900430580.jpg?resize=768%2C510&ssl=1"},
  {title:"Event Sample Two",details:"This is a sample details for an event e",img:"https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"},
  {title:"Event Sample Three",details:"This is a sample details for an event hello",img:"https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fa-7ng0Wicx7F2ZyFVuoAyQ%252FGettyImages-655976164.jpg&width=1200&quality=80"},
  {title:"Event Sample Four",details:"sdfsdf",img:"https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg"},
  {title:"Event Sample One",details:"This is a sample details for an event",img:"https://i2.wp.com/www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2013/03/MP900430580.jpg?resize=768%2C510&ssl=1"},
  {title:"Event Sample Two",details:"This is a sample details for an event",img:"https://content.phuket101.net/wp-content/uploads/20190731181616/phuket-cooking-classes.jpg"},
  {title:"Event Sample Three",details:"This is a sample details for an event hello",img:"https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fa-7ng0Wicx7F2ZyFVuoAyQ%252FGettyImages-655976164.jpg&width=1200&quality=80"},
  {title:"Event Sample Four",details:"sdfsdf",img:"https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg"}
]



const Landing = () => (

      <div className="dashboard container">
        <br></br>
        <div className="display-5">Unique experiences hosted by locals.</div>
        <div className="display-5">Select an event below for more details.</div> <br></br>
        <div>
          <SimpleMap></SimpleMap>
        <EventsList data={data} />

        </div>
      </div>


);

export default Landing;
