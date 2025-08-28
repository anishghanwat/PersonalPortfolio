import express from 'express';

import Contact from '../models/contact.js';

const router = express.Router();

// Get all Contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Create a new Contact
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ success: true, msg: "Message saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;