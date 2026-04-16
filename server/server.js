import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectMongoDB, { isMongoConnected } from './config/mongodb.js';
import hotelRoutes from './routes/hotelRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const mongoConnected = await connectMongoDB();

app.use('/rooms', hotelRoutes);

app.get('/env', (req, res) => {
    res.json({
        environment: process.env.NODE_ENV || 'development',
        mongoConnected: isMongoConnected(),
    })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`MongoDB: ${mongoConnected ? 'connected' : 'unavailable'}`);
})
