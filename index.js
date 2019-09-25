// call express from libraries
const express = require('express');
const app = express();

// this is a route
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

// listen the port
app.listen(PORT);
