import React from 'react';
import './ManageProduct.css'
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { _id, name, img, price } = props?.mainservice;
    return (
        // single service 
        <div className="container">
            <div className="row g-0 border border-dark border-3 mb-5 p-1 ">
                <div className="col-md-4 ">
                    <img src={img} className="img-fluid rounded-start" width="250px" alt="..." />
                </div>
                <div className="col-md-8 px-5 d-flex align-items-center ">
                    <div className="card-body ">
                        <h4 className="card-title">{name}</h4>
                        <h6><small>Product ID {_id}</small></h6>
                        <h6>Price : {price}</h6>
                    </div>
                    <button className="btn-dark px-4 py-1 rounded-2 border-0" onClick={() => props.handelDeleteOrder(_id)}>Delete</button>
                </div>

            </div>

        </div>



    );
};

export default ManageProduct;