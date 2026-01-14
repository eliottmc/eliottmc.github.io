import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Approche from './pages/Approche';
import Presta from './pages/Presta';
import Bilan from './pages/Bilan';
import Tarifs from './pages/Tarifs';
import Educ from './pages/Educ';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Legals from './pages/Legals';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
        <Router>
            <div style={{ paddingTop: '56px', backgroundColor: '#F5F3EE'}}>
            <div className="fixed-top">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/approche" element={<Approche />} />
                <Route path="/prestations" element={<Presta />} />
                <Route path="/bilan" element={<Bilan />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/education" element={<Educ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legals" element={<Legals />} />
            </Routes>
            </div>
        </Router>
        <Footer />
        </>
    );
};

export default App;