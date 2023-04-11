import { Router } from 'express';
import Products from '../models/products.js';
import { v4 as uuid } from 'uuid';

const products = Router();

products.post('/', async (req, res) => {
    if (!req.body._id){ 
        req.body._id = uuid();
    } 
    const resp = await Products.findByIdAndUpdate(req.body._id, req.body, {upsert: true, new: true});
    res.json(resp);
});

products.get('/', async (req, res) => {
    const resp = await Products.find();
    res.json(resp);
});

export default products;