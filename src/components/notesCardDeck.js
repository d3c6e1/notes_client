import React, { Component } from 'react'
import { CardDeck} from "react-bootstrap";

import NoteCard from '../components/noteCard';

// import { NOTES as mock } from './../lib/mockData.js';

import service from '../services/NoteService';

export default class NotesCardDeck extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [],
        };
    }

    componentDidMount() {
        this.load();
    }

    componentWillUnmount() {
        this.setState({notes: []});
    }

    load() {
        service.getAllNotes().then((data) => {
            if(data){
                this.setState({notes: [...data]});
            }
        });
    }

    render() {
        return (
            <>
                <CardDeck className="m-4">
                    {
                        this.state.notes.map((note) => (
                            <NoteCard id={note.id} content={note.content} lastUpdate={new Date(Date.parse(note.lastUpdate)).toLocaleString()} />
                        ))
                    }
                </CardDeck>
            </>
        );
    }
}
