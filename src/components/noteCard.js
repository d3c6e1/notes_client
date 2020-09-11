import React, { Component } from 'react'
import { Card, Button, Col } from "react-bootstrap";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import service from '../services/NoteService';

export default class NoteCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: {
                id: props.id,
                content: props.content,
                lastUpdate: props.lastUpdate,
            },
            handleDeleteClick: props.onDeleteClick,
        }
    }

    render() {

        const {note, handleDeleteClick} = this.state;

        return (
            <>
                <Col sm="12" md="12" lg="6" xl="4" className="my-3">
                    <Card id={note.id} bg="light" border="dark">
                        <Card.Body>
                            <Card.Text>
                                {note.content}
                            </Card.Text>
                            <Card.Footer className="my-2">
                                {note.lastUpdate}
                            </Card.Footer>
                            <Button variant="outline-danger" onClick={handleDeleteClick}>
                                DELETE
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}
