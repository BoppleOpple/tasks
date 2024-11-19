import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function toggleEditing() {
        setEditing(!editing);
    }

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function updateStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent(e.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editing-check"
                label="Editing?"
                checked={editing}
                onChange={toggleEditing}
            />

            {editing && <Form.Label>Name:</Form.Label>}
            {editing && (
                <Form.Control type="text" value={name} onChange={updateName} />
            )}
            {editing && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
            <p>
                {student ?
                    `${name} is a student.`
                :   `${name} is not a student.`}
            </p>
        </div>
    );
}
