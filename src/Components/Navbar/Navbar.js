import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import logo from "../../Images/logo.png"
import "../Style/Style.css"
const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2">
            {loggedInUser.name}
        </li>
    }



    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light color text-dark"}>
            <div class="container-fluid">
                <div className="col-md-6 ms-3">
                    <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                    <a className="navbar-brand color ms-3 h1" href="#home">Grocery Store</a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)}
                    id="nav-toggle-button"
                    class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" aria-current="page" href="#service">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#food">Foods</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/checkOut/:name">CheckOut</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/orders">Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/login">LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;