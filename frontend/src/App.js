import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
