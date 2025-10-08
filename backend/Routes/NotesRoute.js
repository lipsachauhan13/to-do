import express from 'express';
import { addNotes, deleteNote, getAllNotes, updateNote } from '../Controllers/NotesController.js';

const router = express.Router();

router.post('/add', addNotes); //http://localhost:3001/notes/add

router.get('/get', getAllNotes); //http://localhost:3001/notes/get

router.put('/update/:id', updateNote); //http://localhost:3001/notes/update/4

router.delete('/dlt/:id', deleteNote); //http://localhost:3001/notes/dlt/4

export default router;
