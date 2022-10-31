import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alert";
import PrivateRoute from "./routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/alertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <PrivateRoute Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
