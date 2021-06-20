import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Payment from '../Payments/Payment/Payment';
import "./CheckOut.css"
import Swal from 'sweetalert2';
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
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Order Has Been Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const [orderedProduct, setOrderedProduct] = useState(false)
    let display;
    if (orderedProduct) {
        display =
            <div>
                <Navbar></Navbar>
                <div>
                    <h3 className="mt-5 pt-5 text-center container">Hi <span className="text-danger">{loggedInUser.name}</span>. Please Pay For Getting Your Foods.If You Want To Update Your Information PLease Click On the Update Information Button.</h3>
                    <div className="d-grid text-center container mt-2">
                        <button onClick={() => setOrderedProduct(!orderedProduct)} variant="secondary" className="btn-lg  btn-block btn-danger" block>Update Information</button>
                    </div>
                </div>
                <div id="Contact" className=" mb-5" fluid>
                    <div className=" row mt-5 d-flex justify-content-center align-items-center">
                        <div className="text-center col-md-6">
                            <Payment></Payment>

                        </div>
                        <div className="col-md-4">
                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yzoqyyqf.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
    }
    else {
        display =
            <div>
                <Navbar></Navbar>
                <div id="Contact" className=" my-5 pb-5 p-3" fluid>
                    <div className="row mt-5">
                        <div className="col-md-7 mt-5 pt-5">
                            <table className="table mt-2 table-hover table-striped table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">Food Name</th>
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
                            <div className="col-md-12 d-grid">
                                <button onClick={addToCart} className="btn btn-danger btn-lg" ><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                            </div>
                        </div>
                        <div className="col-md-4"  >
                            <div style={{ marginTop: "100px" }} id="booking-area" className="booking-form ">
                                <div className="input-group ">
                                    <label for="">Your Name</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Name" />
                                </div>
                                <div className="input-group">
                                    <label for="">Your Phone Number</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Phone Number" />
                                </div>
                                <div className="input-group">
                                    <label for="">Delivered Location</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Location" />
                                </div>
                                <div className="inputs">
                                    <div className="input-group">
                                        <label for="">Order Date</label>
                                        <input className="inp-style text-light" type="date" name="" />
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button onClick={() => setOrderedProduct(!orderedProduct)} variant="secondary" className="btn-lg  btn-block btn-danger" block>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    return (
        <div style={{ backgroundColor: "#050c1a", color: "white", height: "980px" }}>
            {display}
        </div>
    );
};

export default CheckOut;