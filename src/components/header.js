import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink} from 'react-router-dom';
import logo from "../assets/logo.svg";
import styled from 'styled-components';

const Styles = styled.div`
  a, .navbar-nav {
    color: grey;
    &:hover {
      color: black;
    };
    &:active {
      color: red;
    };
    margin: 0 0.5em;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <Styles>
          <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/newnote">New note</NavLink>
                <NavLink to="/about">About</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </>
    );
  }
}
