import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
    <div>
        <Header />
        <main className="container">
            { children }
        </main>
    </div>
)