import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Components from './pages/Components';
import Details from './pages/Details';
import Assembly from './pages/Assembly';
import Testing from './pages/Testing';
import Layout from './functions/Layout';
import Pcgaming from './pages/Pcgaming';

function App() {
  
  return (
    <>
    {<Layout />}
    <Router>
      <Routes>
        <Route path="/pcgaming" element={<Pcgaming />} />
        <Route path="/components" element={<Components />} />
        <Route path="/details" element={<Details />} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
