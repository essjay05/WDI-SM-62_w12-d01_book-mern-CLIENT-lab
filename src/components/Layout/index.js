import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
    <div>
        <Navbar />
        <h1> Full-stack Book MERN App</h1>
        <main className="container">
            { children }
        </main>
    </div>
)