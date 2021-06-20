import axios from 'axios';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../Images/logo.png'
import Swal from 'sweetalert2';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
const AddReviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-danger">
            {loggedInUser.name}
        </li>
    }

    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            from: data.from,
            quote: data.quote,
            img: imageURL
        }

        const url = `https://lychee-pie-36175.herokuapp.com/addReview`
        console.log(reviewData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks For Your Valuable Review.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '45989dd4589e7b6e62f67e349b536454');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ backgroundColor: "#12161f", height: "925px", color: "white" }}>
            <nav class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <div className="col-md-6 ms-3">
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

            <div className="text-center mt-5 pt-5">
                <h1 className="mt-5 pt-5">Add Reviews Here ....!!!!</h1>
            </div>
            <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6 mt-3">
                    <label for="name" className="form-label"><h4>Your Name</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Name" name="name" ref={register} className="form-control text-light" id="inputEmail4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="from" className="form-label"><h4>Place You Live</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Location" name="from" className="form-control text-light" ref={register} id="inputPassword4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="quote" className="form-label"><h4>Your Review About Our Service </h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Review" name="quote" className="form-control text-light" ref={register} id="inputEmail4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label className="form-label"><h4>Insert Your Image</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} className="form-control text-light" type="file" onChange={handleImageUpload} id="formFile" />
                </div>
                <div className="col-12 d-grid ">
                    <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Reviews</button>
                </div>
            </form>
        </div>
    );
};

export default AddReviews;