import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductsCard = (props) => {
    const { name, weight, price, image } = props.product


    const history = useHistory()
    const handleBuy = (name) => {
        history.push(`/checkOut/${name}`)
    }


    return (


        <div className="col-md-3 m-3 ">
            <div class="card h-auto mb-3 card-bg text-light border border-info border-2 rounded focus">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="text-center">{name} : {weight} Kg</h5>
                    <div className="mt-3 d-flex">
                        <h3 className="text-light col-md-6">${price}</h3>
                        <button type="button" onClick={() => handleBuy(name)} className="btn btn-danger col-md-6 rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default ProductsCard;