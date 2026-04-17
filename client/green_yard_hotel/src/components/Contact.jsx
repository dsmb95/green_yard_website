import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Contact = () => {
    const [name, setName] = useState(null); 
    const [number, setNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const messageObject = {
            name: name,
            number: number,
            email: email,
            message: message,
        }

        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="name">Name: </label>
                <input id="name" value={name} onChange={({target}) => setName(target.value)} placeholder='Name'></input>
                <label for="number">Phone Number: </label>
                <input id="number" value={number} onChange={({target}) => setNumber(target.value)} placeholder='+1 (250) 123 1234'></input>
                <label for="email" ></label>
                <input id="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder='yourname@email.com'></input>
                <label for="message">Message:</label>
                <textarea id="message" value={message} onChange={({target}) => setMessage(target.value)} placeholder='Type your message here'></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default Contact;