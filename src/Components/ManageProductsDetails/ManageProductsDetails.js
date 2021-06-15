import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const ManageProductsDetails = (props) => {
    const { _id, name, price, weight } = props.pd

    const handleDelete = (id) => {
        fetch(`https://lychee-pie-36175.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Has Been Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('deleted', result)
            })
        console.log(id)
    }
    return (
        <div className="m-1 mb-4 col-md-3">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Product Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Product Price : {price} $</span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Product Weight : {weight} Kg</span> </li>
                <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Product</span></li>

            </ul>
        </div>
    );
};

export default ManageProductsDetails;