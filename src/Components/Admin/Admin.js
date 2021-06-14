import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';

const Admin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2">
            {loggedInUser.name}
        </li>
    }


    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            image: imageURL
        }

        const url = `https://lychee-pie-36175.herokuapp.com/addEvent`
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side', res))
    };



    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '31a13646b3a7cd53009fbf5d71f7c437');
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
        <div >
            <div className="ms-5">
                <nav className="d-flex navbar navbar-expand-lg">
                    <div style={{ marginTop: '30px' }} className="container-fluid">
                        <h3 className="text-success">Grocery Store</h3>
                        <div className="d-flex flex-row-reverse" id="navbarNav">
                            <ul className="navbar-nav justify-content-end ms-5">
                                {display}
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/home">Home</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/admin">Add Products</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/manage">Manage Products</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="text-center">
                <h1>Add Products Here ....!!!!</h1>
            </div>

            <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <label for="name" className="form-label"><h4>Product Name</h4></label>
                    <input name="name" ref={register} className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="weight" className="form-label"><h4>Weight</h4></label>
                    <input name="weight" className="form-control" ref={register} id="inputPassword4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="Price" className="form-label"><h4>Price</h4></label>
                    <input name="price" className="form-control" ref={register} id="inputEmail4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="weight" className="form-label"><h4>Insert File</h4></label>
                    <input className="form-control" type="file" onChange={handleImageUpload} id="formFile" />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button className="mt-4 btn btn-success btn-lg " type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Admin;