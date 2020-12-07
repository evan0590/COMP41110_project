import React from "react";
import { Route } from "react-router-dom";

import EventList from "./containers/EventListView";
import EventDetail from "./containers/EventDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={EventList} />
      <Route exact path="/events/:eventID/" component={EventDetail} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
    </div>
  );
};

export default BaseRouter;
