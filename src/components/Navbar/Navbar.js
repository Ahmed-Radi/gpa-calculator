import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" height="50" width="100" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <NavList className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                </NavList>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    button.navbar-toggler {
        color: transparent;
        border: none;
        &:focus {
            outline:none;
        }
    }
`
const NavList = styled.ul`
    .nav-item {
        a {
            display: inline-block;
        }
    }
`