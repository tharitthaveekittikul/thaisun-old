import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Verify() {
  const [loading, setLoading] = useState(false);
  const { verify, logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await verify();
      console.log("verify");
      await logout();
      console.log("logout");
      history.push("/login");
    } catch {}
    setLoading(false);
  }

  //   async function logoutAuto(e) {
  //     e.preventDefault();

  //     try {
  //       await logout();
  //       console.log("logout");
  //     } catch {}
  //     setLoading(false);
  //   }

  return (
    <Route
      render={(props) => {
        if (currentUser.emailVerified) {
          return <Redirect to="/" />;
        }
        return (
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Card>
                <Card.Body>
                  <h1 className="text-center mb-4">Verify your Email</h1>
                  <h3 className="text-center mb-4">
                    Go to your email inbox, and please verify your email.
                  </h3>
                  <Button
                    disabled={loading}
                    className="w-100"
                    onClick={handleSubmit}
                  >
                    Re-send verification email
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Container>
        );
      }}
    />
  );
}

export default Verify;
