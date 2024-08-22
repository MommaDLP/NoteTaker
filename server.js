const fs = require('fs') //file system operations
const path = require('path')//working with file paths
const express = require('express')// framework for web application

const app = express()
const PORT = process.env.PORT || 3001
const db = require('./db/db.json')

//unique ID for notes
const { v4: uuidv4 } = require('uuid');

//API routes
app.get('/api/notes', (req, res)=>{
    //The db.json file and return all saved notes as JSON
    fs.readFile('./db/db.json', (err,data)=> {
        if (err) throw err;
        let dbData = JSON.parse(data);
        //new database
        req.json(dbData);
    });
});

//POST
app.delete('/api/notes/:id', (req,res)=> {
    const newDb =db.filter((note) =>
    note.id !== req.params.id)

    fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
// send that removed note object back to user
    readFile.json(newDb)
})

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Notes
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'note.html'))
})

app.listen(PORT, () =>
console.log(`Aaapp listening on ${PORT}`))