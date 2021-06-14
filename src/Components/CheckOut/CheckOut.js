import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const CheckOut = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    const pdType = products.find(pd => pd.name === name);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...pdType, _id: Math.random(), orderTime: new Date() };

        fetch('https://lychee-pie-36175.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully')
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="m-5 p-5" >
                <table className="table table-hover table-striped table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-bolder">{name}</td>
                            <td className="ps-4 fw-bolder">{pdType && pdType.weight + 'Kg'}</td>
                            <td className="fw-bolder">{pdType && pdType.price + '$'}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="col-md-12  d-flex justify-content-end">
                    <button className="btn btn-success btn-lg" onClick={addToCart}><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;