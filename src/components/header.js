import React, { Component } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "../assets/logo.svg";
import Home from "../pages/Home";
import NewNote from "../pages/NewNote";
import About from "../pages/About";

export default class Header extends Component {
  render() {
    return (
        <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="logo"
            /> Notes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/newnote"> New note </Nav.Link>
              <Nav.Link href="/about"> About </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeHolder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newnote" component={NewNote} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      </>
    );
  }
}
