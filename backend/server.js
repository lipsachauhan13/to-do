import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import UserRoute from './Routes/UserRoute.js'
import NotesRoute from './Routes/NotesRoute.js'
import TaskRoute from './Routes/TaskRoute.js'

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res) =>{
    res.send('hello world!!');
})

app.use('/', UserRoute);
app.use('/notes', NotesRoute);
app.use('/task', TaskRoute);

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);;
    
});