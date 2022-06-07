const express = require('express');
const path = require('path');
const termData = require('./db/terms.json');
const app = express()
const PORT = 3001

app.get('/notes', (res, req) => 
 res.sendFile(path.join)(__dirname, 'public/notes.html'));
 
 app.get('*', (req, res) =>
  res.sendFile(path.join)(_dirname, 'public/index.html'));

  app.get('/api/notes', (req,res) => res.json(termData));

  //app.post('/api/notes', (req, res) => )