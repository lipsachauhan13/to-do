import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Header from './Pages/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NoteList from './Pages/Notes/NoteList';
import NoteForm from './Pages/Notes/NoteForm';
import TaskList from './Pages/Tasks/TaskList';
import TaskForm from './Pages/Tasks/TaskForm';


function App() {
  return (
    <BrowserRouter>

      {/* <Header /> */}

      <Routes>

        <Route path='/' element={<Login />} />

        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path='/home' element={< Home />} />

        <Route path='/notelist' element={< NoteList />} />
        <Route path='/noteform' element={< NoteForm />} />

        <Route path='/tasklist' element={<  TaskList/>} />
        <Route path='/taskform' element={<  TaskForm/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
