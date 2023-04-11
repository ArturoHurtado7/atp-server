import { Router } from 'express';
import Status from '../models/status.js';

const health = Router();

health.get('/status', async (req, res) => {
    const monitor = await Status.find();
    if (monitor.length === 0) {
        res.send('Ok!');
    } else {
        res.send(monitor[0].status);
    }
});

health.post('/status', async (req, res) => {
    const resp = await Status.findByIdAndUpdate('status', req.body, {upsert: true, new: true});
    res.json(resp);
});

export default health;