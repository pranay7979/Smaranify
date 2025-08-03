// db.js
const mongoose = require('mongoose');
async function connectToMongo() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
module.exports = connectToMongo;
