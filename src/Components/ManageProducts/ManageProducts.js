import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ManageProductsDetails from '../ManageProductsDetails/ManageProductsDetails';
import logo from "../../Images/logo.png"
const ManageProducts = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-danger">
            {loggedInUser.name}
        </li>
    }


    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div style={{ color: "white" }} className="pt-3 manageBackground">
            <nav class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <div className="ms-3">
                        <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                        <a className="navbar-brand color ms-3 h1" href="#home">Grocery Store</a>
                    </div>
                    <button id="nav-toggle-button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul class="navbar-nav ms-auto h5">
                            {display}
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/dashboard">Add Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/manage">Manage Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/addReviews">Add Reviews</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <h1 className="text-center pt-5">You Total Have {products.length} Products ....!!!!!</h1>

                <div className="row ps-2">
                    {
                        products.map(pd => <ManageProductsDetails pd={pd}></ManageProductsDetails>)
                    }
                </div>
            </div>

        </div >
    );
};

export default ManageProducts;