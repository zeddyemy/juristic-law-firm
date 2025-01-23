import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import the custom CSS file
import "./assets/css/styles.css";

// import pages
import Home from "./pages/home/Home";

// import custom components
import UseLayout from "./components/layout/UseLayout";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route
                        path="/home"
                        element={<UseLayout page={<Home />} />}
                    />

                    
                </Routes>
            </Router>
        </>
    );
}

export default App;
