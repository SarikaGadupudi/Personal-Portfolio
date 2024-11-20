import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

