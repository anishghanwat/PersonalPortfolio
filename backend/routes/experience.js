import express from 'express';

import Experience from '../models/experience.js';

const router = express.Router();

// Get all experiences
router.get('/', async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router;