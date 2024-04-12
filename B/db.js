// db.js
const mongoose = require('mongoose');
async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/notebook');
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
module.exports = connectToMongo;
