import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default () => (
    <nav>
        <div>
            <Link to="/"> Home </Link>
        </div>
        <div>
            <Link to="/characters/new"> New </Link>
        </div>
    </nav>
)