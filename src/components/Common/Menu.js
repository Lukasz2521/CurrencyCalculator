import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

const Menu = (props) => {
    return (
        <Navbar brand='logo' right>
            <Link to="/">Kursy walut</Link>
            <Link to="/calculator">Kalkulator walut</Link>
        </Navbar>
    );
};

export default Menu;