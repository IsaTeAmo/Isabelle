
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Painel from './pages/Painel.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Isabelle" element={<Home/>}/>
          <Route path="/Isabelle/TeAmo" element={<Painel/>}/>
          
        </Routes>
      </Router>
      {/*  */}
      
    </div>
  );
}

export default App;
