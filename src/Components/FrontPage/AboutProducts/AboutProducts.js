import React from 'react';

const AboutProducts = () => {
    return (
        <div id="service" className=" my-3 py-3 text-light fw-bolder">
            <h1 className="text-center display-2 mt-3 pt-5">Foods We Provide</h1>
            <div className="row  d-flex justify-content-center height mx-2">

                <div className="col-md-4 col-sm-4 my-1 me-1 px-3 d-flex justify-content-start align-items-center rounded fruit ">
                    <div>
                        <h1>Super Healthy</h1>
                        <button className="btn btn-danger btn-lg rounded-pill">Shop Now</button>
                    </div>
                </div>
                <div className="col-md-7 col-sm-4  my-1  px-3 d-flex justify-content-start align-items-center rounded fruit">
                    <div>
                        <h1>Fresh Fruits</h1>
                        <h5>Flat 25% Discount</h5>
                        <button className="btn btn-danger btn-lg rounded-pill">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center height mx-2">
                <div className="col-md-7 d-flex me-1 my-1  px-3 justify-content-start align-items-center rounded  fruit">
                    <div>
                        <h1>Fresh Vegetables</h1>
                        <h5>Get 30% off on your order</h5>
                        <button className="btn btn-danger btn-lg rounded-pill">Shop Now</button>
                    </div>
                </div>
                <div className="col-md-4  my-1  px-3 d-flex justify-content-start align-items-center rounded fruit">
                    <div>
                        <h1>100% Organic</h1>
                        <button className="btn btn-danger btn-lg rounded-pill">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProducts;