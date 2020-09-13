import React, { Component } from 'react'
import { Form, Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default class NotePopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            note: {
                id: null,
                content: null,
                lastUpdate: null,
            },
        };
    }

    showNote = (note) => {
        this.setState({
            show: true,
            note: {
                id: note.id,
                content: note.content,
                lastUpdate: note.lastUpdate,
            }
        });
    }

    handleHide = () => {
        this.setState({
            show: false,
        });
    }

    render() {

        const {
            show,
            note,
        } = this.state;

        return (
            <>
                <Modal
                    show={show}
                    onHide={this.handleHide}
                    size="lg"
                >
                <ModalHeader closeButton>
                    Updated: {new Date(Date.parse(note.lastUpdate)).toLocaleString()}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        
                    </Form>
                </ModalBody>
                </Modal>
            </>
        );
    }
}
