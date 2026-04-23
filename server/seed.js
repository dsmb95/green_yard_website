import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Room from './models/Room.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const rooms = [
    {
        "room": "Vulu Twin Deluxe",
        "price": 1200,
        "description": "A standard room with two twin beds.",
        "pax": 2,
        "imgUrl": [
            "/images/room_photos/vulu_twin_deluxe_1.jpg",
            "/images/room_photos/vulu_twin_deluxe_2.jpg",
            "/images/room_photos/vulu_twin_deluxe_3.jpg",
            "/images/room_photos/vulu_twin_deluxe_4.jpg",
            "/images/room_photos/vulu_twin_deluxe_5.jpg"
        ],
    },
    {
        "room": "Kawayan Deluxe",
        "price": 1800,
        "description": "A standard room with one queen bed.",
        "pax": 2,
        "imgUrl": [
            "/images/room_photos/kawayan_deluxe_1.jpg",
            "/images/room_photos/kawayan_deluxe_2.jpg",
            "/images/room_photos/kawayan_deluxe_3.jpg"
        ],
    },
    {
        "room": "Bamboo Deluxe",
        "price": 2500,
        "description": "A standard room with one king bed.",
        "pax": 2,
        "imgUrl": [
            "/images/room_photos/bamboo_deluxe_1.jpg",
            "/images/room_photos/bamboo_deluxe_2.jpg",
            "/images/room_photos/bamboo_deluxe_3.jpg"
        ],
    }
];

try {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not set in server/.env');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
    });

    console.log('Connected. Clearing existing rooms...');
    await Room.deleteMany({});

    console.log('Inserting seed data...');
    const insertedRooms = await Room.insertMany(rooms);

    console.log(`Seed complete. Inserted ${insertedRooms.length} rooms.`);
} catch (error) {
    console.error('Seed failed:', error.message);
    process.exitCode = 1;
} finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
}
