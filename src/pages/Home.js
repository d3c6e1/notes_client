import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import NotesCardDeck from '../components/notesCardDeck';

export default class Home extends Component {
    render() {
        return (
            <>
            <Container>
                <h4 className="text-center m-4">
                    Your notes
                </h4>
                <NotesCardDeck />
            </Container>
            </>
        );
    }
}
