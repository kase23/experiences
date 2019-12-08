import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homescreen from "./components/homescreen/Homescreen";
import EventDetails from "./components/events/EventDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="bg-light">
          <Switch>
            <Route exact path="/" component={Homescreen} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
