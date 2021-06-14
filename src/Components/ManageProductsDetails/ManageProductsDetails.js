import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProductsDetails = (props) => {
    const { _id, name, price, weight } = props.pd

    const handleDelete = (id) => {
        fetch(`https://lychee-pie-36175.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <div className="m-5">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Product Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Product Price : {price} $</span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Product Weight : {weight} Kg</span> </li>
                <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-outline-success fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Product</span></li>

            </ul>
        </div>
    );
};

export default ManageProductsDetails;