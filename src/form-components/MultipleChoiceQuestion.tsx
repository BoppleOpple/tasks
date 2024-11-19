import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<String>(options[0]);

    function updateSelectedAnswer(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(e.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select onChange={updateSelectedAnswer}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <span>{selectedAnswer == expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
