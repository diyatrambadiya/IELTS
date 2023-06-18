import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Register =  () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleRegister = () => {
            // Perform register logic here
            Axios.post('http://localhost:8081/register', { email, password })
                .then((response) => {
                    // Handle successful registration
                    console.log(response.data);
                })
                .catch((error) => {
                    // Handle registration error
                    console.log(error);
                });
        };
    
        return (
            <>
                
                <div className="form-container">
                <div className="head"><h1>IELTS Speaking WEB</h1></div>
                    <h2>Register</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Register</button>
                    <span><a href="/">Already customer ? Login here!</a></span>
                </div>
            </>
        );
    }