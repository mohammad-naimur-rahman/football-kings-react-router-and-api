import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Link to='/'><h3 className='text-white'>Football Kings</h3></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/home'><span className='text-white mx-3'>Home</span></Link>
                    <Link to='/contact'><span className='text-white mx-3'>Contact us</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNav;