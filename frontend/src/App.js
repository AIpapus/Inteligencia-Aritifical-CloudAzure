import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Bienvenida from './components/bienvenida';
import Diagnostico from './components/diagnosico';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/diagnostico" element={<Diagnostico />} /> /* Mandamos llamar a los demás componentes a esta sección para tenerlo como archivo principal */
        </Routes>
      </div>
    </Router>
  );
}

export default App;