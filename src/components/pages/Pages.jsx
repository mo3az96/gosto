import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "../home/Home";
import { Details } from "../details/Details";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
