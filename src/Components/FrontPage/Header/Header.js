import React from 'react';


const Header = () => {
    return (
        <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-4 my-5 py-5">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-12 col-xs-12 my-5 py-5 ">
                <h1 className="text-light ">Sale up to 30% all products</h1>
                <h1 className="text-light h1 display-1">Feel Healthy And <br /> Fresh Foods </h1>
                <button className="btn btn-danger btn-lg p-4 mt-3 text-light  col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 rounded-pill btn-block">Shop Now</button>
            </div>
        </div>
    );
};

export default Header;