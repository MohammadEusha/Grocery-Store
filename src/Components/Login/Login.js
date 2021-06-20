import React, { useContext, useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginForm';

import './Login.css'

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });
    initializeLoginFramework();


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        else { <h1>jdhsahdkj</h1> }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();

    }
    return (
        <div className="logIn">
            <Navbar></Navbar>
            <div className="text-center pt-5 text-light">
                <div>
                    <h1 className="text-light px-5 mx-5">Welcome To Grocery Store .Please Sign In With Your Google Account To See Your Ordered Services And To Confirm It...!!!!</h1>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center pt-5">
                            <div id="booking-area" className="booking-form">
                                <h1>Grocery Store</h1>
                                <form onSubmit={handleSubmit} x>
                                    <div className="input-group ">
                                        {newUser && <h4>Name</h4>}
                                        {newUser && <input className="text-light" name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                                    </div>
                                    <div className="input-group">
                                        <label for=""><h4>Email</h4></label>
                                        <input className="text-light" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                                    </div>
                                    <div className="input-group">
                                        <label for=""><h4>Password</h4></label>
                                        <input className="text-light" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                                    </div>
                                    <div className="d-grid">
                                        <input className="btn-lg  btn-block btn-danger" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                                    </div>
                                    <div >
                                        <p>New Here??? Become One Of Us <a onClick={() => setNewUser(!newUser)} href="#">Sign Up</a></p>
                                    </div>
                                </form>

                                <p style={{ color: 'red' }}>{user.error}</p>
                                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center pt-5">
                            <button style={{ width: "380px" }} onClick={googleSignIn} className="btn btn-danger btn-block btn-lg mt-1"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AXoQyR.json"
                            background="transparent"
                            speed="1"
                            style={{ height: "600px" }}
                            loop
                            autoplay>
                        </lottie-player>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;