import express from 'express';
import { getRooms } from '../controllers/hotelController.js';
import { requireMongoDB } from '../controllers/mongoDBCheck.js'

const router = express.Router();

router.get('/', requireMongoDB, getRooms);

export default router;