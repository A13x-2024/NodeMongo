const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my mongoAPI');
});

app.post ("/blogpost", (req, res) => {
    res.send('This is a post request');
});



mongoose.
connect("mongodb+srv://Alex:Oakleaf96@alexapi.2jyqy.mongodb.net/Products-API?retryWrites=true&w=majority&appName=AlexAPI")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`listening to ${port}`);
      });
});