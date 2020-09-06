import React, { Component } from 'react'
import { CardDeck} from "react-bootstrap";
import NoteCard from '../components/noteCard';

export default class NotesCardDeck extends Component {
    render() {
        return (
            <>
                <CardDeck className="m-4">
                    <NoteCard title="Title" description="description" />
                    <NoteCard title="Title" description="description" />
                    <NoteCard title="Title" description="description" />
                    <NoteCard title="Title" description="description" />
                </CardDeck>
            </>
        );
    }
}
