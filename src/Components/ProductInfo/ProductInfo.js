import React from 'react';

const ProductInfo = (props) => {
    const { name, price } = props.product
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-bolder">{name}</td>
                        <td className="ps-4">1</td>
                        <td className="fw-bolder">{price}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default ProductInfo;