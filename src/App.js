import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Message from './pages/Message';
import Task from './components/Task';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>}>
            <Route path='' element={<Home/>} />
            <Route path='/message' element={<Message/>} />
          </Route>
          <Route path='/task' element={<Task/>} />
          <Route path="/layout" element={<Layout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
