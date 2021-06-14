import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductsCard from '../ProductsCard/ProductsCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div id="food" className=" container mt-5 pt-5">
                <h1 className="text-center text-light display-2 mt-5 pt-5">Foods We Provide</h1>
                <div className="row d-flex justify-content-center">

                    {
                        products.map(product => <ProductsCard product={product}></ProductsCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;