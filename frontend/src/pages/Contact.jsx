import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus(data.error || 'Error sending message. Plase try again later.');
                console.error('Error response from server: ', data);
                return;
            }
        } catch (error) {
            setStatus('Error sending message.Please try again later.');
            console.error('Error submitting contact form:', error);
            return;
        }
    }

    return (
        <section className="p-10 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    rows="5"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Send
                </button>
            </form>
            {status && <p className="mt-4 text-gray-700">{status}</p>}
        </section>
    );
}

export default Contact;