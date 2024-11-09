import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetallePelicula from './pages/DetallePelicula';
import ErrorPage from './pages/ErrorPage';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<DetallePelicula />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
