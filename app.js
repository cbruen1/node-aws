const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page v1.1");
});

const port = process.env.port || '3000';

app.listen(port, () => {
    console.log('Whazzzup...');
});