import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
            <div className=" col-md-5  col-sm-6 col-12 my-5 py-5 ">
                <h1 className="text-light ">Sale up to 30% all products</h1>
                <h1 className="text-light h1 display-1">Feel Healthy And Fresh Foods </h1>
                <button className="btn btn-danger btn-lg p-4 text-light  col-md-4 rounded-pill btn-block">Shop Now</button>
            </div>
        </div>
    );
};

export default Header;