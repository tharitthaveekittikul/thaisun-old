import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword"
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
};

export default App;
