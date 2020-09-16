import React, { Component } from 'react'
import { Card, Button, Col } from "react-bootstrap";

export default class NoteCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: {
                id: props.id,
                content: props.content,
                lastUpdate: props.lastUpdate,
            },
            hDelete: props.onDeleteClick,
            hNoteClick: props.onNoteClick,
        }
    }

    render() {

        const {
            note,
            hDelete,
            hNoteClick
        } = this.state;

        return (
            <>
                <Col sm="12" md="12" lg="6" xl="4" className="my-3">
                    <Card bg="light" border="dark">
                        <Card.Body>
                            <div onClick={hNoteClick}>
                                <Card.Text>
                                    {note.content}
                                </Card.Text>
                                <Card.Footer className="my-2 text-muted">
                                    Last update: {note.lastUpdate}
                                </Card.Footer>
                            </div>
                            <Button variant="outline-danger" onClick={hDelete}>
                                DELETE
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}
