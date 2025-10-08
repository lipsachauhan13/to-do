import express from 'express';
import { addTask, deleteTask, getAllTask, updateTask } from '../Controllers/TaskController.js';

const router = express.Router();

router.post('/add', addTask); //http://localhost:3001/tasks/add

router.get('/get', getAllTask); //http://localhost:3001/tasks/get

router.put('/update/:id' , updateTask); //http://localhost:3001/task/update/4

router.delete('/dlt/:id', deleteTask); //http://localhost:3001/task/dlt/4

export default router;
