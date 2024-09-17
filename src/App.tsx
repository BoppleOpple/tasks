import React from "react";
import "./App.css";
import histogram from "./approach1_10000_histogram.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <h1>Assignments</h1>
            <p>
                Liam Hillery, Fall 2024 <br />
                Hello World!
            </p>
            <img
                src={histogram}
                alt="An image of a histogram I had handy for another class"
            />
            <ol>
                <li>List element 1</li>
                <li>List element 2</li>
                <li>List element 3</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "150px",
                                height: "400px",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "150px",
                                height: "400px",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
