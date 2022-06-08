const express = require('express');
const path = require('path');
const termData = require('./db/db.json');
const app = express()
const PORT = process.env.PORT || 3001;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
//get is read
//post is create
//update updates
// delete deletes


app.get('/api/notes', (req, res) => res.json(termData));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
 app.post('/api/notes', (req, res) => {
     termData.push(req.body)
     res.json(termData)
 } )

app.listen(PORT, function () {
    console.log('app is listening PORT ' + PORT)
})