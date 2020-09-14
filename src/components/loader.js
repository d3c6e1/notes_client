import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

export default class Loader extends Component {
    render() {
        return (
            <>
            <Spinner animation="border" variant="dark" />
            </>
        );
    }
}
