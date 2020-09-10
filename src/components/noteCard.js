import React, { Component } from 'react'
import { Card, Button, Col } from "react-bootstrap";

export default class NoteCard extends Component {
    render() {
        return (
            <>
                <Col sm="12" md="12" lg="6" xl="4" className="my-3">
                    <Card id={this.props.id} bg="light" border="dark">
                        <Card.Body>
                            <Card.Text>
                                {this.props.content}
                            </Card.Text>
                            <Card.Footer className="my-2">
                                {this.props.lastUpdate}
                            </Card.Footer>
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
