const connectTomongo = require('./db');

var cors = require('cors')
connectTomongo();

const express = require('express');
const app = express();
const port = 4501;

app.use(cors());
app.use(express.json());


// For Authentication
app.use('/api/auth', require('./routes/auth.js'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port} ok that`)
})

// don't ever pressurise yourself to think too hard it is not good for my mental health