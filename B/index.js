// app.js
const connectToMongo = require('./db');
connectToMongo();
const express = require('express');
var cors= require('cors');



const app = express();
const port = 5000;
app.use(cors());
//Calling use(cors()) will enable the express server to respond to preflight requests.
//A preflight request is basically an OPTION request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts.
app.use(express.json())
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))


app.get('/', (req, res) => {
});

app.listen(port, () => {
  console.log(`Notebook running at http://localhost:${port}`);
});
