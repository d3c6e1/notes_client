import React, { Component } from 'react'
import { CardDeck, Form, FormControl, Container } from "react-bootstrap";

import NoteCard from './noteCard';

import service from '../services/NoteService';
import NotePopUp from './notePopUp';

export default class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: null,
            filter:{
                searchString: null,
            },
        };
        this.notePopUp = React.createRef();
    }

    componentDidMount() {
        this.loadNotes();
    }

    componentWillUnmount() {
        this.setState({notes: null});
    }

    // search input
    handleChange = event => {
        this.setState({
            filter: { searchString: event.target.value }
        }, () => {
            this.loadNotes();
        });
    }

    // search input submit(enter)
    handleSubmit = event => {
        event.preventDefault();
        this.loadNotes();
    }

    // DELETE button
    handleDeleteClick = (event, noteId) => {
        event.preventDefault();
        this.deleteNote(noteId);
    }

    // click on note card
    handleNoteClick = (event, note) => {
        event.preventDefault();
        this.notePopUp.current.showNote(note);
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

    deleteNote(noteId) {
        service.deleteNote(noteId).then( () => {
                this.loadNotes();
            }
        );
    }

    render() {

        const {
            notes,
        } = this.state;

        return (
            <>
                <Container className="mt-2">
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
                        <CardDeck className="">
                            {
                                notes.map((note) => (
                                    <NoteCard
                                        content={note.content}
                                        lastUpdate={
                                            new Date(Date.parse(note.lastUpdate)).toLocaleString()
                                        }
                                        onDeleteClick={
                                            (event) => this.handleDeleteClick(event, note.id)
                                        }
                                        onNoteClick={
                                            (event) => this.handleNoteClick(event, note)
                                        }
                                    />
                                ))
                            }
                        </CardDeck>
                    ) : 'Notes not found'
                }
                <NotePopUp
                    ref={this.notePopUp}
                />
            </>
        );
    }
}
