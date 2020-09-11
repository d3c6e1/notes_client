import React, { Component } from 'react'
import { CardDeck, Form, FormControl, Container } from "react-bootstrap";

import NoteCard from './noteCard';

import service from '../services/NoteService';

export default class NotesCardDeck extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: null,
            filter:{
                searchString: null,
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadNotes();
    }

    componentWillUnmount() {
        this.setState({notes: null});
    }

    handleChange(event) {
        this.setState({
            filter: { searchString: event.target.value }
        }, () => {
            this.loadNotes();
        });
    }

    handleSubmit(event) {
        this.loadNotes();
        event.preventDefault();
    }

    handleDeleteClick = (event, noteId) => {
        this.deleteNote(noteId);
        event.preventDefault();
    }

    loadNotes() {
        this.setState({
            notes: [],
        }, () => {
            service.getNotes({
                filter: this.state.filter
            }).then((data) => {
                if(data){
                    this.setState({
                        notes: [...data],
                    });
                }
            }).catch(e => {
                this.setState({
                    notes: null,
                });
            });
        });
    }

    deleteNote(noteId){
        service.deleteNote(noteId).then(
            () => {
                this.loadNotes();
            }
        );
    }

    render() {

        const { notes } = this.state;

        return (
            <>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormControl
                            type="text"
                            placeHolder="Search notes"
                            onChange={this.handleChange}
                        />
                    </Form>
                </Container>
                {
                    notes ? (
                        <CardDeck className="m-4">
                            {
                                notes.map((note) => (
                                    <NoteCard
                                        id={note.id}
                                        content={note.content}
                                        lastUpdate={
                                            new Date(Date.parse(note.lastUpdate)).toLocaleString()
                                        }
                                        onDeleteClick={(event) => this.handleDeleteClick(event, note.id)}
                                    />
                                ))
                            }
                        </CardDeck>
                    ) : 'Notes not found'
                }
            </>
        );
    }
}
