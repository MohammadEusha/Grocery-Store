import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import OrdersDetails from '../OrdersDetails/OrdersDetails';

const Orders = () => {
    const [boughtProducts, setBoughtProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://lychee-pie-36175.herokuapp.com/cart?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBoughtProducts(data))
    }, [loggedInUser.email])
    return (
        <div style={{ backgroundColor: "#050c1a", color: "white", height: "900px" }}>
            <Navbar></Navbar>
            <h1 className="mt-5 text-center">Hi {loggedInUser.name} , You Have Bought  {boughtProducts.length} Products....!!!!!</h1>

            <div className="row d-flex justify-content-center">
                {
                    boughtProducts.map(bought => <OrdersDetails bought={bought} ></OrdersDetails>)
                }
            </div>

        </div>
    );
};

export default Orders;