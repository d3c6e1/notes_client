import React, { Component } from 'react'
import { CardDeck, Form, FormControl } from "react-bootstrap";

import service from '../services/NoteService';

import NoteCard from './noteCard';
import NotePopUp from './notePopUp';

export default class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: null,
            filter:{
                searchString: null,
            },
            notePopUp:{
                show: false,
                note: {
                    id: null,
                    content: null,
                    lastUpdate: null,
                },
            }
        };
    }

    componentDidMount() {
        this.loadNotes();
    }

    componentWillUnmount() {
        this.setState({notes: null});
    }

    // search input
    handleSearchInputChange = event => {
        this.setState({
            filter: { searchString: event.target.value }
        }, () => {
            this.loadNotes();
        });
    }

    // search input submit(enter)
    handleSearchInputSubmit = event => {
        event.preventDefault();
        this.loadNotes();
    }

    // DELETE button
    handleDeleteClick = (event, noteId) => {
        event.preventDefault();
        service.deleteNote(noteId).then(
            () => {
                this.loadNotes();
            }
        );
    }

    // click on note card
    handleNoteClick = (event, note) => {
        event.preventDefault();
        this.setState({
            notePopUp:{
                show: true,
                note: {
                    id: note.id,
                    content: note.content,
                    lastUpdate: note.lastUpdate,
                },
            }
        });
    }

    // update note after modal hide
    handleHide = () => {
        const note = this.state.notePopUp.note;
        service.updateNote(note).then(
            () => {
                this.loadNotes();
            }
        );
        this.setState({
            notePopUp:{
                show: false,
                note: {
                    id: null,
                    content: null,
                    lastUpdate: null,
                },
            }
        });
    }

    // save changes to state
    handleChangeNoteForm = event => {
        this.setState({
            notePopUp:{
                show: true,
                note:{
                    id: this.state.notePopUp.note.id,
                    content: event.target.value,
                    lastUpdate: new Date()
                }
            }
        });
    }

    handleSubmitNoteForm = event => {
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

    render() {

        const {
            notes,
        } = this.state;

        return (
            <>
                <div className="mt-3 mx-3">
                    <Form onSubmit={this.handleSearchInputSubmit}>
                        <FormControl
                            type="text"
                            placeholder="Search notes"
                            onChange={this.handleSearchInputChange}
                        />
                    </Form>
                </div>
                {
                    notes ? (
                        <CardDeck>
                            {
                                notes.map((note) => (
                                    <NoteCard
                                        key={note.id}
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
                    show={this.state.notePopUp.show}
                    onHide={this.handleHide}
                    content={this.state.notePopUp.note.content}
                    lastUpdate={
                        new Date(Date.parse(this.state.notePopUp.note.lastUpdate)).toLocaleString()
                    }
                    onFormSubmit={(event) => this.handleSubmitNoteForm(event)}
                    onFormChange={(event) => this.handleChangeNoteForm(event)}
                />
            </>
        );
    }
}
