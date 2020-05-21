const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page v1.1");
});

app.listen(3000, () => {
    console.log('Whazzzup...');
});