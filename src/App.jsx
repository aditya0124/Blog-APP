import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Update import
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Router> {/* Wrap the Routes with BrowserRouter */}
        <Routes> {/* Replace Switch with Routes */}
          <Route path='/' element={<Home />} /> {/* Use element prop */}
          <Route path='/blog/:id' element={<Blog />} /> {/* Use element prop */}
          <Route path='*' element={<Navigate to="/" />} /> {/* Use element prop */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
