// db.js
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
module.exports = connectToMongo;
