import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import MyButton from "../../components/MyButton.jsx";
import './PetForm.css';

export const PetForm = ({ submit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newPet = { name, description, avatar };
        submit(newPet);
    }

    return (
        <Form className="pet-form" onSubmit={onSubmit} style={{marginBottom: '20px'}}>
            <Form.Group className="mb-3" controlId="pets-name">
                <Form.Label style={{paddingRight: '30px'}}>Zone name:</Form.Label>
                <Form.Control type="text" placeholder="Enter zone alias" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <MyButton variant="primary" type="submit">Submit</MyButton>
        </Form>
    );
}
