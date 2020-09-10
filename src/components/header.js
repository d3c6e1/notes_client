import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from "../assets/logo.svg";
import styled from 'styled-components';

const Styles = styled.div`
  a, .nav-link {
    color: grey;
    &:hover {
      color: black;
    };
    &:active {
      color: red;
    };
  }
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <Styles>
          <Navbar collapseOnSelect expand="md" bg="light" variant="light">
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
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/newnote">New note</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </>
    );
  }
}
