import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Orderform from '../Orderform/Orderform';
// import axios from 'axios';
import "./PlaceDetails.css"
const PlaceDetails = () => {

    const { bikeID } = useParams();
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch(`https://afternoon-gorge-53746.herokuapp.com/bikes/${bikeID}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (

        <div className="container px-1">
            <div className="row gx-5 mt-5">
                <div className="col">
                    <div className="  ">

                        <div className="d-flex mb-5 justify-content-center">
                            <div className="card " style={{ maxWidth: "540px" }}>
                                <div className="row g-0 border border-5">
                                    <div className="">
                                        <img src={bikes?.img} className="img-fluid rounded-start w-100" alt="..." />
                                    </div>
                                    <div className="">
                                        <div className="card-body">
                                            <h3 className="card-title">{bikes?.name}</h3>
                                            <h5>Price: {bikes?.price}</h5>
                                            <p className="card-text"> {bikes?.Description}</p>
                                            <Link to="/home"><button className="btn btn-dark">Go Home</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="">

                        <img src="https://media.istockphoto.com/vectors/fastfree-and-healthy-scooter-delivery-concept-vector-id1214959423?k=20&m=1214959423&s=612x612&w=0&h=oPN85BEV442EqcHCdmlGrgtSqA0uKeWlJn4roQkDYV8=" width="250px" height="150px" alt="" />
                        <h2 className="fw-bold text-dark mb-5 border-success">Place Your Oder</h2>

                        <Orderform
                            bikes={bikes}
                        ></Orderform>

                    </div>
                </div>
            </div>
        </div>

    );

};

export default PlaceDetails;