import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="my-3">
                        <a
                            href="https://github.com/d3c6e1/notes_client"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </Container>
            </>
        );
    }
}
