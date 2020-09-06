import React, { Component } from 'react'
import { Card, Button, Col } from "react-bootstrap";

export default class NoteCard extends Component {
    render() {
        return (
            <>
                <Col sm="12" md="12" lg="6" xl="4" className="my-3">
                    <Card bg="light" border="dark">
                        <Card.Body>
                            <Card.Title>
                                {this.props.title}
                            </Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button variant="outline-dark">
                                EDIT
                            </Button>
                            <Button variant="outline-danger" className="ml-2">
                                DELETE
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}
