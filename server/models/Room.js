import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
    {
        room: { type: String, required: true, trim: true },
        price: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, trim: true},
        pax: { type: Number, required: true, min: 2 },
    } 
);

export default mongoose.model('Room', roomSchema);