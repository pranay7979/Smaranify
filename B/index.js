// app.js
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Use dynamic PORT if provided (Render sets this)
const port = process.env.PORT || 5000;

// ✅ Enable CORS for frontend access
app.use(cors());

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ API routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/notes', require('./Routes/notes'));

// ✅ Health check route (for root access)
app.get('/', (req, res) => {
  res.send('📒 Smaranify backend is running!');
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`✅ Notebook running at http://localhost:${port}`);
});
