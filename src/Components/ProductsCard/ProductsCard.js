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


        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 m-3 ">
            <div class="card h-auto mb-3 card-bg text-light border border-info border-2 rounded focus">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="text-center">{name} : {weight} Kg</h5>

                    <div className="mt-3 d-flex justify-content-between">

                        <div className="">
                            <h3 className="text-light ">${price}</h3>
                        </div>

                        <div className="">
                            <button type="button" onClick={() => handleBuy(name)} className="btn btn-danger rounded-pill   "><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default ProductsCard;