import React, { Component } from 'react'
import { Form, FormControl, Modal, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default class NotePopUp extends Component {
    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                >
                <ModalHeader closeButton>
                    Updated: {this.props.lastUpdate}
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.props.onFormSubmit}>
                        <FormControl
                            as="textarea"
                            rows={20}
                            defaultValue={this.props.content}
                            onChange={this.props.onFormChange}
                        />
                    </Form>
                </ModalBody>
                </Modal>
            </>
        );
    }
}
