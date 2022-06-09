import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  console.log(currentUser, 'PRIVATEROUTE=====');
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        if (currentUser != null) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
        // currentUser!=null ? <Redirect to="/login" /> : <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
