import mongoose from 'mongoose';

let mongoConnectPromise = null;

async function connectMongoDB() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error ('MONGODB_URI is not set. Check your .env file.');
        }

        if (mongoose.connection.readyState === 1) {
            return true;
        }

        if (!mongoConnectPromise) {
            mongoConnectPromise = mongoose.connect(process.env.MONGODB_URI, {
                serverSelectionTimeoutMS: 5000
            });
        }

        await mongoConnectPromise;

        console.log('✅ Successfully connected to MongoDB.')
        return true;
    
    } catch(err) {
        
        console.error('MongoDB connection failed:', err.message);
        return false;
    
    } finally {

        if (mongoose.connection.readyState !== 2) {
            mongoConnectPromise = null;
        }

    }
};

const isMongoConnected = () => mongoose.connection.readyState === 1;

export { isMongoConnected };
export default connectMongoDB;
