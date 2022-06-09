const express = require('express');
const fs = require('fs');
const path = require('path');
const termData = require('./db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//returns the notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
//saves notes and joins db json
app.get('/api/notes', (req, res) => res.json(termData));
//returns index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
//add notes to db json
app.post('/api/notes', (req, res) => {
    termData.push(req.body)
    res.json(termData)
})

app.listen(PORT, function () {
    console.log('app is listening PORT ' + PORT)
})