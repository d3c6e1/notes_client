import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from "react-bootstrap";

function randomImage(imagesCount) {
    let rnd = Math.floor(Math.random() * imagesCount) + 1;
    try{
        return require(`../assets/images/pic${rnd}.jpg`);
    } catch (err) {
        console.error(err);
        randomImage(imagesCount);
    }
}

export default class Home extends Component {
    render() {
        return (
            <Container>
                <h4 className="text-center m-4">
                    Your notes
                </h4>
                <CardDeck>
                    <Card className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        {/* <Card.Img
                            variant="top"
                            src={randomImage(14)}
                            alt="background"
                        /> */}
                        <Card.Body>
                            <Card.Title>
                                Note's name
                            </Card.Title>
                            <Card.Text>
                                Note's description
                            </Card.Text>
                            <Button variant="outline-dark" className="m-3">
                                EDIT
                            </Button>
                            <Button variant="outline-danger" className="m-3">
                                DELETE
                            </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}
