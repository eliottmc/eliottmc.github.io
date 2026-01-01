import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Presta from './pages/Presta';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
        <Router>
            <div style={{ paddingTop: '56px', backgroundColor: '#f8f9fa'}}>
            <div className="fixed-top">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prestations" element={<Presta />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
            </div>
        </Router>
        <Footer />
        </>
    );
};

export default App;