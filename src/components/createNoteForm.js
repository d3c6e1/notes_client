import React, { Component } from 'react'
import { Button, Form, FormControl, FormText, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

import service from '../services/NoteService';

export default class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            noteSubmitted: false,
            note:{
                content: null,
                lastUpdate: new Date()
            }
        }
    }

    handleChange = event => {
        const noteText = event.target.value;
        this.setState({
            isDisabled: !noteText,
            note:{
                content: noteText,
                lastUpdate: new Date()
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            isDisabled: true,
        }, () => {
            service.addNote(this.state.note).then(
                this.setState({
                    noteSubmitted: true
                })
            );
        });
    }

    handleClick = (event) => {
        this.handleSubmit(event);
    }

    render() {
        if (this.state.noteSubmitted) {
            return  <Redirect to="/" />;
        } else {
            return (
                <>
                    <div className="mt-2 mx-2">
                        <Form onSubmit={this.handleSubmit}>
                            <FormControl
                                as="textarea"
                                rows={10}
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <Row className="mt-2 mx-0">
                                <Button
                                    type="submit"
                                    disabled={this.state.isDisabled}
                                    onClick={(event) => this.handleClick(event)}
                                >
                                    Save note
                                </Button>
                                <FormText className="m-2" muted>
                                    {this.state.note.lastUpdate.toLocaleString()}
                                </FormText>
                            </Row>
                        </Form>
                    </div>
                </>
            );
        }
    }
}
