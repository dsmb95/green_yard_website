import connectMongoDB, { isMongoConnected } from "../config/mongodb.js";

export const requireMongoDB = async (req, res, next) => {
    if (!isMongoConnected()) {
        const connected = await connectMongoDB();

        if (!connected || !isMongoConnected()) {
            return res.status(503).json({ error: 'MongoDB unavailable' });
        }
    }

    next();
};
