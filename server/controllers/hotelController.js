import Room from '../models/Room.js';

export  const getRooms = async (req, res) => {
    try {
        
        const rooms = await Room.find({});
        res.json(rooms);
    
    } catch(err) {
        
        console.error(err.message);
        res.status(500).json({ error: 'Room not found.' })
    
    }
};