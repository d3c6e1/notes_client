import React, { Component } from 'react'
import { CardDeck, Form, FormControl, Button, Container, Col } from "react-bootstrap";

import NoteCard from './noteCard';
import Loader from './loader';

import service from '../services/NoteService';
import ServerError from '../lib/errors/ServerError';

export default class NotesCardDeck extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            filter:{
                searchString: null,
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.load();
    }

    componentWillUnmount() {
        this.setState({notes: []});
    }

    handleChange(event) {
        this.setState({
            filter: { searchString: event.target.value }
        }, () => {
            this.load();
        });
    }

    handleSubmit(event) {
        this.load();
        event.preventDefault();
    }

    load() {
        this.setState({
            isLoading: true
        });

        service.getNotes({
            filter: this.state.filter
        }).then((data) => {
            if(data){
                this.setState({
                    notes: [...data],
                    isLoading: false,
                });
            }
        }).catch(e => {
            this.setState({
                notes: null,
            });
        });
    }

    render() {
        const { notes, } = this.state;

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
                                    <NoteCard id={note.id} content={note.content} lastUpdate={new Date(Date.parse(note.lastUpdate)).toLocaleString()} />
                                ))
                            }
                        </CardDeck>
                    ) : 'Notes not found'
                }
            </>
        );
    }
}
