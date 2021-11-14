import React from 'react';
import { Link } from 'react-router-dom';

const Explore = (props) => {
    const { _id, name, img, Description, price } = props.service;
    const descrip = Description?.slice(0, 200);
    return (
        <div className="container">
            <div className="row g-0 border border-dark border-3 mb-5 p-1 ">
                <div className="col-md-4 ">
                    <img src={img} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{descrip} <span> <b> Read More...</b></span></p>
                        <p>Cost : &#2547; {price}</p>
                        <Link to={`/bikes/${_id}`}><button className="btn-dark px-4 py-1 rounded-2">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Explore;