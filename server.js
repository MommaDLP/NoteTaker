// const fs = require('fs') //file system operations
const path = require('path')//working with file paths
const express = require('express')// framework for web application
const api =require('./routes/index');

const app = express()
const PORT = process.env.PORT || 3001
// const db = require('./db/db.json')

// //unique ID for notes
// const { v4: uuidv4 } = require('uuid');

app.use(express.json()); //parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

//API
// app.get('/api/notes', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'db', 'db.json'));
// });

    // //random ID
    // newNote.id = uuidv4()

    // //adds the note to the array
    // db.push(newNote)

    //update the json file with the new object
//     fs.writeFileSync('./db/db.json', JSON.stringify(db))

//     res.json(db)
// })

// //DELETE
// app.delete('/api/notes/:id', (req,res)=> {
//     const newDb =db.filter((note) =>
//     note.id !== req.params.id)

//     fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
// // send that removed note object back to user
//     res.json(newDb)
// })
//INDEX.JS
// app.get('/assets/js/index.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'assets', 'js', 'index.js'));
//   });
  
//   //CSS
//   app.get('/assets/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'assets', 'css', 'styles.css'));
//   });

//HTML
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/note.html'))
});

// let notes = [];

// //Saved notes
// const loadNotes = () => {
//   const filePath = path.resolve(__dirname, 'db', 'db.json');
//   const data = fs.readFileSync(filePath, 'utf8');
//   notes = JSON.parse(data);
// };
// loadNotes();

// //
// const saveNotes = () => {
//   const filePath = path.resolve(__dirname, 'db', 'db.json');
//   fs.writeFileSync(filePath, JSON.stringify(notes, null, 2), 'utf8');
// };

// //POST
// app.post('/api/notes', (req, res) => {

//   const { title, text } = req.body; 
//   const newNote = {
//     id: null, title, text
//   };

//   notes.push(newNote);

//   const notesWithId = generateId(notes);
//   const updatedNote = notesWithId.find(note => note.title === newNote.title && note.text === newNote.text);
//   newNote.id = updatedNote.id;

//   saveNotes(notesWithId);
//   console.log('new note added:', newNote);
//   res.status(201).json(newNote);
// });



app.listen(PORT, () =>
console.log(`App listening on http:localhost: ${PORT}`)
);