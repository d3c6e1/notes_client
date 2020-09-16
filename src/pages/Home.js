import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Notes from '../components/notes';

export default class Home extends Component {
    render() {
        return (
            <>
            <Container>
                <Notes />
            </Container>
            </>
        );
    }
}
