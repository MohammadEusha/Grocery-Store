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
            <div className=" container mt-5 ">
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