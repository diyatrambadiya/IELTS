import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Dashboard } from "./components/dashboard";
import { Nav } from "./components/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/nav.css";
import "./components/dashboard.css"
import 'regenerator-runtime/runtime'

function App() {
    
    return (
        <div className="app-container">
            <Router>
                <Nav />

                <div className="pages">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
