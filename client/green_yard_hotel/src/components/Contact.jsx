import { useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState(null); 
    const [number, setNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const form = useRef();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // const formData = new FormData(e.currentTarget);
        // const data = Object.fromEntries(formData.entries());
        // console.log("Parsed Data: ", data);
        // const response = await fetch('', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
        // Autoreply to ensure hotel has received the inquiry.
        emailjs.sendForm(
            'service_zzb2019',
            'template_pdidal5',
            form.current,
            'Ob1JsSy96m4b9ugf_'
        )
        .then(() => {
            alert("Message send successfully!");
        })
        .catch(err => {
            alert("Check the console for errors");
            console.log(err);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} ref={form} className="contact-form">
                <label for="name" >Name: </label>
                <input id="name" value={name}  name="guest_name" onChange={({target}) => setName(target.value)} placeholder='Name'></input>
                <label for="number">Phone Number: </label>
                <input id="number" value={number} name="guest_phone" onChange={({target}) => setNumber(target.value)} placeholder='+1 (250) 123 1234'></input>
                <label for="email" >Email:</label>
                <input id="email" value={email} name="guest_email" onChange={({target}) => setEmail(target.value)} placeholder='youremail@email.com'></input>
                <label for="message">Message:</label>
                <textarea id="message" value={message} name="guest_message" onChange={({target}) => setMessage(target.value)} placeholder='Type your message here'></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default Contact;