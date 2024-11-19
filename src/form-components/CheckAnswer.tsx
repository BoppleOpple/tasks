import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<String>("");

    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(e.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Label>Answer:</Form.Label>
            <Form.Control type="text" onChange={updateAnswer} />
            <span>{givenAnswer == expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
